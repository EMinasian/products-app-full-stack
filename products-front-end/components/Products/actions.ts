"use server";

import { get } from "@/utils/customFetch";
import type { ProductType } from "@/types/prodcuts";

const getProducts = async () => {
  const prodcuts = await get<ProductType[]>({
    path: "/products",
    tags: ["products"],
  });
  return prodcuts;
};

export { getProducts };
