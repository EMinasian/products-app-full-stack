export const formatErrorMessage = (message: string) => message[0].toUpperCase() + message.slice(1)

export const getErrorMessages = (response: { message: string | string[] }): string[] => {
  if (response?.message) {
    if (Array.isArray(response?.message)) {
      return response?.message.map((error: string) => formatErrorMessage(error))
    } 
    return [formatErrorMessage(response?.message)]
  }

  return ['Unknown error occured!']
}