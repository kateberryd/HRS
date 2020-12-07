export const errorReducer = (state, action) => {
    console.log(action)
    if (!action.error) {
      return {
        ...state,
        error: null
      }
    }
  
    return {
      ...state,
      error: action.payload.data.error,
    }
  }