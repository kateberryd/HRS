import axios from "../../../utility/axios"
import { toast } from 'react-toastify';
import {
    GET_QUALITY_ASSURANCE_LIST,
    GET_QUALITY_ASSURANCE_LIST_SUCCESS,
    GET_QUALITY_ASSURANCE_LIST_FAILED,
    GET_SINGLE_QUALITY_ASSURANCE,
    GET_SINGLE_QUALITY_ASSURANCE_SUCCESS,
    GET_SINGLE_QUALITY_ASSURANCE_FAILED,
    CLOSE_QUALITY_ASSURANCE,
    CLOSE_QUALITY_ASSURANCE_SUCCESS,
    CLOSE_QUALITY_ASSURANCE_FAILED,
    DELETE_QUALITY_ASSURANCE_SUCCESS,
    DELETE_QUALITY_ASSURANCE_FAILED
} from '../../constants/quality-assurance/index';
   

   export const getQualityAssuranceList = () => async dispatch => {
    dispatch(getQualityAssuranceLoading());
    await axios.get('/quality-assurance')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_QUALITY_ASSURANCE_LIST_SUCCESS,
             payload: res.data.data
         })
        }
            console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_QUALITY_ASSURANCE_LIST_FAILED,
               payload: err.response
           })
          }
      })
}

export const getQualityAssuranceLoading = () => {
    return{
        type: GET_QUALITY_ASSURANCE_LIST,
    }
}



export const deleteQualityAssurance = (id) => async dispatch => {
    console.log(id)
    await axios.delete(`/quality-assurance/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_QUALITY_ASSURANCE_SUCCESS,
             payload: res.data.data
         })
        //  history.push("/add-event")
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: DELETE_QUALITY_ASSURANCE_FAILED,
               payload: err.response
           })
          }
      })
}


export const getSingleQaulityAssurance = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleQaulityAssuranceLoading());
    await axios.get(`/quality-assurance/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_QUALITY_ASSURANCE_SUCCESS,
             payload: res.data.data
         })
         toast.success(res.data.message)
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: GET_SINGLE_QUALITY_ASSURANCE_FAILED,
               payload: err.response.data.error
           })
          }
      })
}

export const getSingleQaulityAssuranceLoading = () => {
    return{
        type: GET_SINGLE_QUALITY_ASSURANCE,
    }
}


export const closeQualityAssurance = (id) => async dispatch => {
    console.log(id)
    dispatch(getCloseQualityAssurnaceLoading());
    await axios.get(`/quality-assurance/close-quality-assurance-inciden?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:CLOSE_QUALITY_ASSURANCE_SUCCESS,
             payload: res.data.data
         })
         toast.success(res.data.message)
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: CLOSE_QUALITY_ASSURANCE_FAILED,
               payload: err.response
           })
          }
      })
}

export const getCloseQualityAssurnaceLoading = () => {
    return{
        type: CLOSE_QUALITY_ASSURANCE,
    }
}