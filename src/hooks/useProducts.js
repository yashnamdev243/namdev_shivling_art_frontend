import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import productService from "../services/productService";

const KEY = "products";

/**
 * List products. Pass filters like { page, limit, search, category }.
 * Used by both the public Products page and the admin product table --
 * one hook, two consumers.
 */
export function useProducts(filters = {}) {
  return useQuery({
    queryKey: [KEY, filters],
    queryFn: () => productService.getAll(filters),
    keepPreviousData: true,
  });
}

export function useProduct(id) {
  return useQuery({
    queryKey: [KEY, id],
    queryFn: () => productService.getById(id),
    enabled: Boolean(id),
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => productService.create(payload),
    onSuccess: () => {
      toast.success("Product created");
      queryClient.invalidateQueries({ queryKey: [KEY] });
    },
    onError: (err) => toast.error(err.message || "Failed to create product"),
  });
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }) => productService.update(id, payload),
    onSuccess: () => {
      toast.success("Product updated");
      queryClient.invalidateQueries({ queryKey: [KEY] });
    },
    onError: (err) => toast.error(err.message || "Failed to update product"),
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => productService.remove(id),
    onSuccess: () => {
      toast.success("Product deleted");
      queryClient.invalidateQueries({ queryKey: [KEY] });
    },
    onError: (err) => toast.error(err.message || "Failed to delete product"),
  });
}
