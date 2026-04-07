"use server";

import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "@/utils/constants";
import { redirect } from "next/navigation";

export const logOutUser = async () => {
  (await cookies()).delete(AUTHENTICATION_COOKIE);
  redirect("/");
};
