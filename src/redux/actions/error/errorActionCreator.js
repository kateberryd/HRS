export const errorActionCreator = (errorType, error) => {
    return {
      type: errorType,
      error: true,
      payload: error,
    }
  }