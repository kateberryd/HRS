import axios from "../../../utility/axios"
import { toast } from 'react-toastify';
import { history } from "../../../history"
import {
    GET_SINGLE_SCORE,
    GET_SINGLE_SCORE_SUCCESS,
    GET_SINGLE_SCORE_FAILED,
    EDIT_SCORE,
    EDIT_SCORE_SUCCESS,
    EDIT_SCORE_FAILED
  } from '../../constants/score/index';

export const getSingleScore = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleScoreLoading());
    await axios.get(`/score/get-score`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_SCORE_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: GET_SINGLE_SCORE_FAILED,
               payload: err.response.data.error
           })
          }
      })
}

export const getSingleScoreLoading = () => {
    return{
        type: GET_SINGLE_SCORE,
    }
}


export const editSingleScore = (formData) => async dispatch => {
    console.log(formData)
    dispatch(editSingleScoreLoading());
    await axios.put(`/score/edit-score?id=${formData.id}`, {
       scoremark: formData.score
     })
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:EDIT_SCORE_SUCCESS,
             payload: res.data.data
         })
         history.push("/score-setting")
         toast.success(res.data.message)
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: EDIT_SCORE_FAILED,
               payload: err.response.data.error
           })
          }
      })
}

export const editSingleScoreLoading = () => {
    return{
        type: EDIT_SCORE,
    }
}

