"use server";

import { post } from "@/utils/customFetch";
import { revalidateTag } from "next/cache";
import getHeaders from "@/utils/getHeaders";
import { getErrorMessages } from "@/utils/errors";
import type { ProductType } from "@/types/prodcuts";

const uploadProductImage = async (productId: number, imageFile: File) => {
  const formData = new FormData();
  formData.append("current-image", imageFile);
  console.log(
    "Uploading image for productId:",
    productId,
    "imageFile",
    imageFile,
    "formData",
    formData,
  );

  const res = await fetch(
    `${process.env.API_URL}/products/${productId}/image`,
    {
      method: "POST",
      headers: {
        ...(await getHeaders()),
      },
      body: formData,
    },
  );

  const data = await res.json();

  if (!res.ok) {
    console.log(JSON.stringify(data));
    return { errors: getErrorMessages(data) };
  }
};

const createProduct = async (formData: FormData) => {
  const payload = {
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
  };

  const res = await post<ProductType>({ path: "/products", payload });

  if (res?.errors) {
    return { errors: res.errors };
  }

  const productImage = formData.get("current-image") as File;

  if (productImage && res?.data) {
    const imageUploadResult = await uploadProductImage(
      res?.data?.id,
      productImage,
    );
    if (imageUploadResult?.errors) {
      return { errors: imageUploadResult.errors };
    }
  }

  revalidateTag("products", "max");
};

export { createProduct };
