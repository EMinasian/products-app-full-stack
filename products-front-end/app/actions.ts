"use server";

import { get } from "@/utils/customFetch";
import type { UserType } from "@/types/auth";

const getCurrentUser = async () => {
  const user = await get<UserType | null>({ path: "/users/current" });
  return user;
};

export { getCurrentUser };
