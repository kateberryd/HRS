import axios from "../../../utility/axios"
import {
    GET_SINGLE_USER,
    GET_SINGLE_USER_SUCCESS,
    GET_SINGLE_USER_FAILED,
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