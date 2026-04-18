import { getErrorMessages } from "@/utils/errors";
import getHeaders from "@/utils/getHeaders";

export const post = async <T>({
  path,
  payload,
}: {
  path: string;
  payload: unknown;
}): Promise<{ errors?: string[]; data?: T } | void> => {
  try {
    const res = await fetch(`${process.env.API_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(await getHeaders()),
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(JSON.stringify(data));
      return { errors: getErrorMessages(data) };
    }

    return { data };
  } catch (error) {
    console.log(JSON.stringify(error));
    return { errors: getErrorMessages(error as Error) };
  }
};

export const get = async <T>({
  path,
  tags,
}: {
  path: string;
  tags?: string[];
}): Promise<{ errors: string[] } | unknown> => {
  try {
    const res = await fetch(`${process.env.API_URL}${path}`, {
      method: "GET",
      headers: await getHeaders(),
      ...(tags && { next: { tags } }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(JSON.stringify(data));
      throw new Error(data.message || "An error occurred while fetching data");
    }

    return data as T;
  } catch (error) {
    console.log(JSON.stringify(error));
    return null;
  }
};
