// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import productService from "../services/productService";

// const KEY = "products";

// /**
//  * List products. Pass filters like { page, limit, search, category }.
//  * Used by both the public Products page and the admin product table --
//  * one hook, two consumers.
//  */
// export function useProducts(filters = {}) {
//   return useQuery({
//     queryKey: [KEY, filters],
//     queryFn: () => productService.getAll(filters),
//     keepPreviousData: true,
//   });
// }

// export function useProduct(id) {
//   return useQuery({
//     queryKey: [KEY, id],
//     queryFn: () => productService.getById(id),
//     enabled: Boolean(id),
//   });
// }

// export function useCreateProduct() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (payload) => productService.create(payload),
//     onSuccess: () => {
//       toast.success("Product created");
//       queryClient.invalidateQueries({ queryKey: [KEY] });
//     },
//     onError: (err) => toast.error(err.message || "Failed to create product"),
//   });
// }

// export function useUpdateProduct() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({ id, payload }) => productService.update(id, payload),
//     onSuccess: () => {
//       toast.success("Product updated");
//       queryClient.invalidateQueries({ queryKey: [KEY] });
//     },
//     onError: (err) => toast.error(err.message || "Failed to update product"),
//   });
// }

// export function useDeleteProduct() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (id) => productService.remove(id),
//     onSuccess: () => {
//       toast.success("Product deleted");
//       queryClient.invalidateQueries({ queryKey: [KEY] });
//     },
//     onError: (err) => toast.error(err.message || "Failed to delete product"),
//   });
// }

// export function useRandomProducts(limit = 8) {
//   return useQuery({
//     queryKey: ["random-products", limit],
//     queryFn: () => productService.getRandom(limit),
//   });
// }



import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import productService from "../services/productService";

const KEY = "products";

/**
 * List products.
 *
 * Used by:
 * - Public Products page
 * - Admin Products page
 *
 * Example:
 * useProducts({
 *   page: 1,
 *   limit: 12,
 *   search: "shivling",
 *   category: "jaladhari",
 *   sort: "-createdAt",
 * });
 */
export function useProducts(filters = {}) {
  return useQuery({
    queryKey: [KEY, filters],

    queryFn: async () => {
      return await productService.getAll(filters);
    },

    // React Query v5 doesn't support keepPreviousData as a boolean.
    // Keeping this simple makes it compatible with your current setup.
    placeholderData: (previousData) => previousData,
  });
}

/**
 * Get a single product.
 *
 * Backend response:
 *
 * {
 *   success: true,
 *   product: {...},
 *   stats: {...}
 * }
 *
 * ProductDetails expects:
 *
 * {
 *   id,
 *   name,
 *   image,
 *   price,
 *   category,
 *   ...
 * }
 *
 * So we return response.product and attach stats.
 */
export function useProduct(id) {
  return useQuery({
    queryKey: [KEY, "detail", id],

    queryFn: async () => {
      const response = await productService.getById(id);

      // Backend returns:
      // {
      //   success: true,
      //   product: {...},
      //   stats: {...}
      // }

      if (response?.product) {
        return {
          ...response.product,

          stats: response.stats || {
            likes: 0,
            wishlist: 0,
            reviews: 0,
            rating: 0,
          },
        };
      }

      // Fallback if productService already returns the product
      if (response?.data?.product) {
        return {
          ...response.data.product,

          stats: response.data.stats || {
            likes: 0,
            wishlist: 0,
            reviews: 0,
            rating: 0,
          },
        };
      }

      // Fallback if API/service directly returns product
      return response?.data || response;
    },

    enabled: Boolean(id),
  });
}

/**
 * Create product
 */
export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => productService.create(payload),

    onSuccess: () => {
      toast.success("Product created");

      queryClient.invalidateQueries({
        queryKey: [KEY],
      });
    },

    onError: (err) => {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to create product",
      );
    },
  });
}

/**
 * Update product
 */
export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }) =>
      productService.update(id, payload),

    onSuccess: (_, variables) => {
      toast.success("Product updated");

      // Refresh product lists
      queryClient.invalidateQueries({
        queryKey: [KEY],
      });

      // Refresh this specific product
      if (variables?.id) {
        queryClient.invalidateQueries({
          queryKey: [KEY, "detail", variables.id],
        });
      }
    },

    onError: (err) => {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to update product",
      );
    },
  });
}

/**
 * Delete product
 */
export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => productService.remove(id),

    onSuccess: () => {
      toast.success("Product deleted");

      queryClient.invalidateQueries({
        queryKey: [KEY],
      });
    },

    onError: (err) => {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to delete product",
      );
    },
  });
}

/**
 * Random products
 *
 * Example:
 * useRandomProducts(8)
 */
export function useRandomProducts(limit = 8) {
  return useQuery({
    queryKey: ["random-products", limit],

    queryFn: () => productService.getRandom(limit),

    placeholderData: (previousData) => previousData,
  });
}