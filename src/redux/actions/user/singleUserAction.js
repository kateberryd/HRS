import axios from "../../../utility/axios"
import { history } from "../../../history"
import {
    GET_SINGLE_USER,
    GET_SINGLE_USER_SUCCESS,
    GET_SINGLE_USER_FAILED,
    
    SUSPEND_USER,
    SUSPEND_USER_SUCCESS,
    SUSPEND_USER_FAILED,
    
    
    ACTIVATE_USER,
    ACTIVATE_USER_SUCCESS,
    ACTIVATE_USER_FAILED,
    
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILED
} from '../../constants/user/index';
   
   
   export const getSingleUser = (id) => async dispatch => {
       dispatch(getSingleUserLoading());
       await axios.get(`/user-management/get-single-user/${id}`)
          .then(res => {
           if(res.data){
            dispatch({
                type:GET_SINGLE_USER_SUCCESS,
                payload: res.data.data
            })
           }
          })
          .catch(err => {
              console.log(err.response)
             if(err){
              dispatch({
                  type: GET_SINGLE_USER_FAILED,
                  payload: err.response
              })
             }
         })
   }
   
   export const getSingleUserLoading = () => {
       return{
           type: GET_SINGLE_USER,
       }
   }
   
      
   export const suspendUserLoading = () => {
    return{
        type: SUSPEND_USER,
    }
}
   
   export const suspendUser = (id) => async dispatch => {
    dispatch(suspendUserLoading());
    console.log(id)
    await axios.get(`/user-management/suspend-user/${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:SUSPEND_USER_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: SUSPEND_USER_FAILED,
               payload: err.response
           })
          }
      })
}
   
   
export const activateUserLoading = () => {
    return{
        type: ACTIVATE_USER,
    }
}
   
export const activateUser = (id) => async dispatch => {
    dispatch(activateUserLoading());
    console.log(id)
    await axios.get(`/user-management/activate-user/${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:ACTIVATE_USER_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: ACTIVATE_USER_FAILED,
               payload: err.response
           })
          }
      })
}


export const deleteUser = (id) => async dispatch => {
    await axios.delete(`/user-management/delete-user/${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_USER_SUCCESS,
             payload: res.data.data
         })
         history.push("/all-users")
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: DELETE_USER_FAILED,
               payload: err.response
           })
          }
      })
}