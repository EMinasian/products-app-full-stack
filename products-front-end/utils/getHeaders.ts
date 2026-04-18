import { cookies } from "next/headers";

const getHeaders = async () => {
  return {
    Cookie: (await cookies()).toString(),
  };
};

export default getHeaders;
