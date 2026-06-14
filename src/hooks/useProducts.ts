import { useMemo } from "react";

import { useProductStore } from "../store";

export const useProducts = () => {
  const products = useProductStore((state) => state.products);

  const searchTerm = useProductStore((state) => state.searchTerm);

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return products;

    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [products, searchTerm]);

  return {
    products: filteredProducts,
  };
};
