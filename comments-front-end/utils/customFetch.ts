import { getErrorMessages } from "@/utils/errors";

export const post = async (path: string, payload: unknown): Promise<{ errors: string[] } | void> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}${path}`,
      {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
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