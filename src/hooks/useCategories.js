import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import categoryService from "../services/categoryService";

const KEY = "categories";

export function useCategories(filters = {}) {
  return useQuery({
    queryKey: [KEY, filters],
    queryFn: () => categoryService.getAll(filters),
    staleTime: 1000 * 60 * 10,
  });
}

export function useCategory(id) {
  return useQuery({
    queryKey: [KEY, id],
    queryFn: () => categoryService.getById(id),
    enabled: Boolean(id),
  });
}

export function useCreateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => categoryService.create(payload),
    onSuccess: () => {
      toast.success("Category created");
      queryClient.invalidateQueries({ queryKey: [KEY] });
    },
    onError: (err) => toast.error(err.message || "Failed to create category"),
  });
}

export function useUpdateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }) => categoryService.update(id, payload),
    onSuccess: () => {
      toast.success("Category updated");
      queryClient.invalidateQueries({ queryKey: [KEY] });
    },
    onError: (err) => toast.error(err.message || "Failed to update category"),
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => categoryService.remove(id),
    onSuccess: () => {
      toast.success("Category deleted");
      queryClient.invalidateQueries({ queryKey: [KEY] });
    },
    onError: (err) => toast.error(err.message || "Failed to delete category"),
  });
}
