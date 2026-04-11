"use server";

import { post } from "@/utils/customFetch";
import { revalidateTag } from "next/cache";

const createPost = async (formData: FormData) => {
  const payload = {
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
  };

  const res = await post({ path: "/products", payload });

  if (res?.errors) {
    return { errors: res.errors };
  }

  revalidateTag("products", "max");
};

export { createPost };
