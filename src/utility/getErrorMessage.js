
import { createSelector } from "reselect"
import { get } from "lodash"

 const createErrorSelector = fn => {
  return createSelector(
    fn,
    storeIndex => get(storeIndex, "error.errorMessage", null)
  )
}


export const getErrorMessage = createErrorSelector(state => state.auth.login.error)
