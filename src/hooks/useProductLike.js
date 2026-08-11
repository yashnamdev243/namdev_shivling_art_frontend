import { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";
import toast from "react-hot-toast";
import likeService from "../services/likeService";
import { API_BASE_URL } from "../config/api";

const SOCKET_URL = API_BASE_URL.replace(/\/api\/?$/, "");

export default function useProductLike(productId) {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadLikes = useCallback(async () => {
    if (!productId) {
      setLikeCount(0);
      setLiked(false);
      setUsers([]);
      return;
    }

    try {
      const response = await likeService.getProductLikes(productId);
      setLikeCount(Number(response?.likeCount || 0));
      setLiked(Boolean(response?.liked));
      setUsers(Array.isArray(response?.users) ? response.users : []);
    } catch (error) {
      if (error?.status !== 401) console.error("Unable to load likes:", error);
    }
  }, [productId]);

  useEffect(() => { loadLikes(); }, [loadLikes]);

  useEffect(() => {
    if (!productId) return undefined;
    const socket = io(SOCKET_URL, { transports: ["websocket"] });
    socket.emit("product:join", productId);

    socket.on("product:likes", (data) => {
      if (String(data?.productId) !== String(productId)) return;
      setLikeCount(Number(data?.likeCount || 0));
      if (typeof data?.liked === "boolean") setLiked(data.liked);
      if (Array.isArray(data?.users)) setUsers(data.users);
    });

    return () => {
      socket.emit("product:leave", productId);
      socket.disconnect();
    };
  }, [productId]);

  const toggleLike = useCallback(async () => {
    if (!productId || loading) return null;
    try {
      setLoading(true);
      const response = await likeService.toggle(productId);
      setLiked(Boolean(response?.liked));
      setLikeCount(Number(response?.likeCount || 0));
      setUsers(Array.isArray(response?.users) ? response.users : []);
      toast.success(response?.message || (response?.liked ? "Product liked." : "Like removed."));
      return response;
    } catch (error) {
      toast.error(error?.message || "Unable to update like.");
      throw error;
    } finally {
      setLoading(false);
    }
  }, [productId, loading]);

  return { liked, likeCount, users, loading, toggleLike, refreshLikes: loadLikes };
}
