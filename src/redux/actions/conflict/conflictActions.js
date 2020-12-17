import axios from "../../../utility/axios"
import { toast } from 'react-toastify';
import {
    GET_CONFLICT_LIST,
    GET_CONFLICT_LIST_SUCCESS,
    GET_CONFLICT_LIST_FAILED,
    GET_SINGLE_CONFLICT,
    GET_SINGLE_CONFLICT_SUCCESS,
    GET_SINGLE_CONFLICT_FAILED,
    CLOSE_CONFLICT,
    CLOSE_CONFLICT_SUCCESS,
    CLOSE_CONFLICT_FAILED,
    DELETE_CONFLICT_SUCCESS,
    DELETE_CONFLICT_FAILED,
} from '../../constants/conflict/index';
   

   export const getConflictList = () => async dispatch => {
    dispatch(getConflictLoading());
    await axios.get('/conflict')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_CONFLICT_LIST_SUCCESS,
             payload: res.data.data
         })
        }
            console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_CONFLICT_LIST_FAILED,
               payload: err.response
           })
          }
      })
}

export const getConflictLoading = () => {
    return{
        type: GET_CONFLICT_LIST,
    }
}



export const deleteConflict = (id) => async dispatch => {
    console.log(id)
    await axios.delete(`/conflict/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_CONFLICT_SUCCESS,
             payload: res.data.data
         })
        //  history.push("/add-event")
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: DELETE_CONFLICT_FAILED,
               payload: err.response
           })
          }
      })
}


export const getSingleConflict = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleConflictLoading());
    await axios.get(`/conflict/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_CONFLICT_SUCCESS,
             payload: res.data.data
         })
         toast.success(res.data.message)
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: GET_SINGLE_CONFLICT_FAILED,
               payload: err.response.data.error
           })
          }
      })
}

export const getSingleConflictLoading = () => {
    return{
        type: GET_SINGLE_CONFLICT,
    }
}


export const closeConflict = (id) => async dispatch => {
    console.log(id)
    dispatch(getCloseConflictLoading());
    await axios.get(`/conflict/close-conflict-inciden?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:CLOSE_CONFLICT_SUCCESS,
             payload: res.data.data
         })
         toast.success(res.data.message)
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: CLOSE_CONFLICT_FAILED,
               payload: err.response
           })
          }
      })
}

export const getCloseConflictLoading = () => {
    return{
        type: CLOSE_CONFLICT,
    }
}