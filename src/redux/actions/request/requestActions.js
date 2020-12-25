import axios from "../../../utility/axios"
import { toast } from 'react-toastify';
import {
    GET_REQUEST_LIST,
    GET_REQUEST_LIST_SUCCESS,
    GET_REQUEST_LIST_FAILED,
    GET_SINGLE_REQUEST,
    GET_SINGLE_REQUEST_SUCCESS,
    GET_SINGLE_REQUEST_FAILED,
    EDIT_REQUEST,
    EDIT_REQUEST_SUCCESS,
    EDIT_REQUEST_FAILED,
    CLOSE_INCIDENT,
    CLOSE_INCIDENT_SUCCESS,
    CLOSE_INCIDENT_FAILED,
    DELETE_REQUEST_SUCCESS,
    DELETE_REQUEST_FAILED,
  } from '../../constants/request/index';

   
   export const getRequestList = () => async dispatch => {
    dispatch(getRequestListLoading());
    await axios.get('/request')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_REQUEST_LIST_SUCCESS,
             payload: res.data.data
         })
        }
            console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_REQUEST_LIST_FAILED,
               payload: err.response
           })
          }
      })
}

export const getRequestListLoading = () => {
    return{
        type: GET_REQUEST_LIST,
    }
}



export const deleteRequest = (id) => async dispatch => {
    console.log(id)
    await axios.delete(`/request/single/?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_REQUEST_SUCCESS,
             payload: res.data.data
         })
         toast.error(res.data.message)
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: DELETE_REQUEST_FAILED,
               payload: err.response
           })
          }
      })
}


export const getSingleRequest = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleRequestLoading());
    await axios.get(`/request/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_REQUEST_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: GET_SINGLE_REQUEST_FAILED,
               payload: err.response.data.error
           })
          }
      })
}

export const getSingleRequestLoading = () => {
    return{
        type: GET_SINGLE_REQUEST,
    }
}


export const editRequest = (id) => async dispatch => {
    dispatch(editRequestLoading());
    await axios.get(`/request/single?id${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:EDIT_REQUEST_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: EDIT_REQUEST_FAILED,
               payload: err.response
           })
          }
      })
}

export const editRequestLoading = () => {
    return{
        type: EDIT_REQUEST,
    }
}

export const closeIncident = (id) => async dispatch => {
    console.log(id)
    dispatch(getCloseIncidentLoading());
    await axios.get(`/request/close-request-incident?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:CLOSE_INCIDENT_SUCCESS,
             payload: res.data.data
         })
         toast.success(res.data.message)
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: CLOSE_INCIDENT_FAILED,
               payload: err.response
           })
          }
      })
}

export const getCloseIncidentLoading = () => {
    return{
        type: CLOSE_INCIDENT,
    }
}