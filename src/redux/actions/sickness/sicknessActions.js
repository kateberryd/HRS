import axios from "../../../utility/axios"
import { toast } from 'react-toastify';
import {
    GET_SICKNESS_LIST,
    GET_SICKNESS_LIST_SUCCESS,
    GET_SICKNESS_LIST_FAILED,
    GET_SINGLE_SICKNESS,
    GET_SINGLE_SICKNESS_SUCCESS,
    GET_SINGLE_SICKNESS_FAILED,
    CLOSE_SICKNESS,
    CLOSE_SICKNESS_SUCCESS,
    CLOSE_SICKNESS_FAILED,
    DELETE_SICKNESS_SUCCESS,
    DELETE_SICKNESS_FAILED
   } from '../../constants/sickness/index';
  

   export const getSicknessList = () => async dispatch => {
    dispatch(getSicknessLoading());
    await axios.get('/sickness')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_SICKNESS_LIST_SUCCESS,
             payload: res.data.data
         })
        }
            console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_SICKNESS_LIST_FAILED,
               payload: err.response
           })
          }
      })
}

export const getSicknessLoading = () => {
    return{
        type: GET_SICKNESS_LIST,
    }
}



export const deleteSickness = (id) => async dispatch => {
    console.log(id)
    await axios.delete(`/sickness/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_SICKNESS_SUCCESS,
             payload: res.data.data
         })
         toast.success(res.data.message)
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: DELETE_SICKNESS_FAILED,
               payload: err.response
           })
          }
      })
}


export const getSingleSickness = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleSicknessLoading());
    await axios.get(`/sickness/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_SICKNESS_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: GET_SINGLE_SICKNESS_FAILED,
               payload: err.response.data.error
           })
          }
      })
}

export const getSingleSicknessLoading = () => {
    return{
        type: GET_SINGLE_SICKNESS,
    }
}


export const closeSickness = (id) => async dispatch => {
    console.log(id)
    dispatch(getCloseSickness());
    await axios.get(`/sickness/close-sickness-incident?id=${id}`)
       .then(res => {
        if(res.data){
        console.log(res.data)
         dispatch({
             type:CLOSE_SICKNESS_SUCCESS,
             payload: res.data.data
         })
         toast.success(res.data.message)
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: CLOSE_SICKNESS_FAILED,
               payload: err.response
           })
          }
      })
}

export const getCloseSickness = () => {
    return{
        type: CLOSE_SICKNESS,
    }
}