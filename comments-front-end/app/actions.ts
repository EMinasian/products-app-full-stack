'use server'

import { get } from "@/utils/customFetch"

const getCurrentUser = async () => {
  try {
    const user = await get('/users/current')
    return user
  } catch (error) {
    console.error('Error fetching current user:', error);
    return null; 
  }
}

export { getCurrentUser }