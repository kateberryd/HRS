import axios from "../../../utility/axios"
import {
    GET_USER_LIST,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_FAILED,
} from '../../constants/user/index';
   
   
   export const getUserList = () => async dispatch => {
       dispatch(setUserListLoading());
       await axios.get('/user-management')
          .then(res => {
           if(res.data){
            dispatch({
                type:GET_USER_LIST_SUCCESS,
                payload: res.data.data
            })
           }
               console.log(res.data.data);
          })
          .catch(err => {
              console.log(err.response)
             if(err){
              dispatch({
                  type: GET_USER_LIST_FAILED,
                  payload: err.response
              })
             }
         })
   }
   
   export const setUserListLoading = () => {
       return{
           type: GET_USER_LIST,
       }
   }