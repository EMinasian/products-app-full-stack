import { cookies } from "next/headers"
import { getErrorMessages } from "@/utils/errors";

const getHeaders = async () => {
  return {
    Cookie: (await cookies()).toString()
  }
} 

export const post = async (path: string, payload: unknown): Promise<{ errors: string[] } | void> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}${path}`,
      {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        ...await getHeaders()
      },
      body: JSON.stringify(payload),
      }
    )

    const data = await res.json()

    if (!res.ok) {
      console.log(JSON.stringify(data))
      return { errors: getErrorMessages(data) }
    }

  } catch (error) {
    console.log(JSON.stringify(error))
    return { errors: getErrorMessages(error as Error) }
  }
}

export const get = async (path: string): Promise<{ errors: string[] } | unknown> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}${path}`,
      {
        method: 'GET',
        headers: await getHeaders(),
    })

    const data = await res.json()

    if (!res.ok) {
      console.log(JSON.stringify(data))
      throw new Error(data.message || 'An error occurred while fetching data');
    }

    return data

  } catch (error) {
    console.log(JSON.stringify(error))
    return null
  }
}