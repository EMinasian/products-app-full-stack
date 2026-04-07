"use server";

import { get } from "@/utils/customFetch";
import type { UserType } from "@/contexts/authContext";

const getCurrentUser = async () => {
  const user = await get("/users/current");
  return user as UserType | null;
};

export { getCurrentUser };
