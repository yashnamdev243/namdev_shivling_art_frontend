import { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";
import toast from "react-hot-toast";
import reviewService from "../services/reviewService";
import { API_BASE_URL } from "../config/api";

const SOCKET_URL = API_BASE_URL.replace(/\/api\/?$/, "");

export default function useProductReviews(productId) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const loadReviews = useCallback(async () => {
    if (!productId) {
      setReviews([]);
      return;
    }
    try {
      setLoading(true);
      const response = await reviewService.list(productId);
      setReviews(Array.isArray(response?.reviews) ? response.reviews : []);
    } catch (error) {
      console.error("Unable to load reviews:", error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => { loadReviews(); }, [loadReviews]);

  useEffect(() => {
    if (!productId) return undefined;
    const socket = io(SOCKET_URL, { transports: ["websocket"] });
    socket.emit("product:join", productId);

    socket.on("product:review:new", (review) => {
      if (String(review?.product_id) !== String(productId) || review?.status !== "approved") return;
      setReviews((prev) => prev.some((x) => String(x.id) === String(review.id)) ? prev : [review, ...prev]);
    });

    socket.on("product:review:updated", (review) => {
      if (String(review?.product_id) !== String(productId)) return;
      setReviews((prev) => {
        if (review?.status !== "approved") return prev.filter((x) => String(x.id) !== String(review.id));
        const exists = prev.some((x) => String(x.id) === String(review.id));
        return exists ? prev.map((x) => String(x.id) === String(review.id) ? review : x) : [review, ...prev];
      });
    });

    socket.on("product:review:deleted", (reviewId) => {
      setReviews((prev) => prev.filter((x) => String(x.id) !== String(reviewId)));
    });

    return () => {
      socket.emit("product:leave", productId);
      socket.disconnect();
    };
  }, [productId]);

  const addReview = async (payload) => {
    if (!productId) {
      toast.error("Product not found.");
      return;
    }
    try {
      setSubmitting(true);
      const response = await reviewService.create(productId, payload);
      if (response?.review) {
        setReviews((prev) => prev.some((x) => String(x.id) === String(response.review.id)) ? prev : [response.review, ...prev]);
      }
      toast.success(response?.message || "Review published successfully.");
      return response;
    } catch (error) {
      toast.error(error?.message || "Unable to submit review.");
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  return { reviews, loading, submitting, addReview, refreshReviews: loadReviews };
}
