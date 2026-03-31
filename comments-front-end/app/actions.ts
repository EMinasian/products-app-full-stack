'use server'

import { get } from "@/utils/customFetch"

const getCurrentUser = async () => {
  const user = await get('/users/current')
  return user
}

export { getCurrentUser }