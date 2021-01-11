import axios from "../../../utility/axios"
import { history } from "../../../history"
import {
    CREATE_BROADCAST,
    CREATE_BROADCAST_SUCCESS,
    CREATE_BROADCAST_FAILED,
    GET_BROADCAST_LIST,
    GET_BROADCAST_LIST_SUCCESS,
    GET_BROADCAST_LIST_FAILED,
    GET_SINGLE_BROADCAST,
    GET_SINGLE_BROADCAST_SUCCESS,
    GET_SINGLE_BROADCAST_FAILED,
    EDIT_BROADCAST,
    EDIT_BROADCAST_SUCCESS,
    EDIT_BROADCAST_FAILED,
    DELETE_BROADCAST_SUCCESS,
    DELETE_BROADCAST_FAILED,
  } from '../../constants/broadcast/index';

 export const createBroadcast = (formData) => async dispatch => {
       dispatch(setBroadcastLoading());
       await axios
       .post("/notification/broadcast", {
         message: formData.message,
         link: formData.link,
         broadcast_type: formData.broadcast_type
       }).then(res => {
           console.log(res.data)
           if(res.data){
            dispatch({
                type:CREATE_BROADCAST_SUCCESS,
                payload: res.data.data
            })
           }
           history.push("/add-broadcast")
          })
          .catch(err => {
              console.log(err.response)
             if(err){
              dispatch({
                  type: CREATE_BROADCAST_FAILED,
                  payload: err.response
              })
             }
         })
   }
   
   export const setBroadcastLoading = () => {
       return{
           type: CREATE_BROADCAST,
       }
   }
   
   
   export const getBroadcastList = () => async dispatch => {
    dispatch(getBroadcastListLoading());
    await axios.get('/notification/broadcast')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_BROADCAST_LIST_SUCCESS,
             payload: res.data.data
         })
        }
            console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_BROADCAST_LIST_FAILED,
               payload: err.response
           })
          }
      })
}

export const getBroadcastListLoading = () => {
    return{
        type: GET_BROADCAST_LIST,
    }
}



export const deleteBroadcast = (id) => async dispatch => {
    await axios.delete(`/broadcast/single/?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_BROADCAST_SUCCESS,
             payload: res.data.data
         })
         history.push("/add-broadcast")
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: DELETE_BROADCAST_FAILED,
               payload: err.response
           })
          }
      })
}


export const getSingleBroadcast = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleBroadcastLoading());
    await axios.get(`/broadcast/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_BROADCAST_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: GET_SINGLE_BROADCAST_FAILED,
               payload: err.response.data.error
           })
          }
      })
}

export const getSingleBroadcastLoading = () => {
    return{
        type: GET_SINGLE_BROADCAST,
    }
}


export const editBroadcast = (id) => async dispatch => {
    dispatch(setEditBroadcastLoading());
    await axios.get(`/broadcast/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:EDIT_BROADCAST_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: EDIT_BROADCAST_FAILED,
               payload: err.response
           })
          }
      })
}

export const setEditBroadcastLoading = () => {
    return{
        type: EDIT_BROADCAST,
    }
}