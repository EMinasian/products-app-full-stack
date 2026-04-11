"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { post } from "@/utils/customFetch";
import { getErrorMessages } from "@/utils/errors";
import { AUTHENTICATION_COOKIE } from "@/utils/constants";

const setAuthCookie = async (response: Response) => {
  const setCookieHeader = response.headers.get("Set-Cookie");
  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    (await cookies()).set({
      name: AUTHENTICATION_COOKIE,
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};

const createUser = async (prevState: unknown, formData: FormData) => {
  const payload = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const res = await post({ path: "/users", payload });

  if (res?.errors) {
    return { errors: res.errors };
  }

  redirect("/");
};

const authenticateUser = async (prevState: unknown, formData: FormData) => {
  const payload = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const res = await fetch(`${process.env.API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(JSON.stringify(data));
      return { errors: getErrorMessages(data) };
    }

    await setAuthCookie(res);
  } catch (error) {
    console.log(JSON.stringify(error));
    return { errors: getErrorMessages(error as Error) };
  }

  redirect("/");
};

export { createUser, authenticateUser };
