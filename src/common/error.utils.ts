export function handleError(customMessage: string, error: Error): void {
    console.error(`Error occurred at ${new Date().toISOString()}:`, error)
  
    const errorMessage =
      customMessage || 'Um erro ocorreu, tente novamente mais tarde.'
  
    if (typeof errorMessage !== 'string') {
      console.error('Invalid customMessage provided:', customMessage)
      return
    }
  }