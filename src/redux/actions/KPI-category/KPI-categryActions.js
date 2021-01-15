import axios from "../../../utility/axios"
import { toast } from 'react-toastify';
// import { history } from "../../../history"
import {
   CREATE_CATEGORY,
   CREATE_CATEGORY_SUCCESS,
   CREATE_CATEGORY_FAILED,
   GET_CATEGORY_LIST,
   GET_CATEGORY_LIST_SUCCESS,
   GET_CATEGORY_LIST_FAILED,
   GET_SINGLE_CATEGORY,
   GET_SINGLE_CATEGORY_SUCCESS,
   GET_SINGLE_CATEGORY_FAILED,
   EDIT_CATEGORY,
   EDIT_CATEGORY_SUCCESS,
   EDIT_CATEGORY_FAILED,
//    DELETE_CATEGORY,
   DELETE_CATEGORY_SUCCESS,
   DELETE_CATEGORY_FAILED
  } from '../../constants/event-category/index';
  
 export const createKPICategory = (formData) => async dispatch => {
     console.log(formData)
       dispatch(setCreateKPICategoryLoading());
       await axios
       .post("/kpi", {
        title: formData.name,
       }).then(res => {
           console.log(res.data)
           if(res.data){
            dispatch({
                type:CREATE_CATEGORY_SUCCESS,
                payload: res.data.data
            })
           }
           toast.success("KPI category created succesfuly")
          })
          .catch(err => {
              console.log(err.response)
             if(err){
              dispatch({
                  type: CREATE_CATEGORY_FAILED,
                  payload: err.response
              })
             }
         })
   }
   
   export const setCreateKPICategoryLoading = () => {
       return{
           type: CREATE_CATEGORY,
       }
   }
   
   
   export const getKPICategoryList = () => async dispatch => {
    dispatch(getKPICategoryListLoading());
    await axios.get('/kpi')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_CATEGORY_LIST_SUCCESS,
             payload: res.data.data
         })
        }
            console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_CATEGORY_LIST_FAILED,
               payload: err.response
           })
          }
      })
}

export const getKPICategoryListLoading = () => {
    return{
        type: GET_CATEGORY_LIST,
    }
}



export const deleteKPICategory = (id) => async dispatch => {
    console.log(id)
    await axios.delete(`/kpi/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_CATEGORY_SUCCESS,
             payload: res.data.data
         })
        //  history.push("/add-event")
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: DELETE_CATEGORY_FAILED,
               payload: err.response
           })
          }
      })
}


export const getSingleKPICategory = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleKPICategoryLoading());
    await axios.get(`/kpi/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_CATEGORY_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: GET_SINGLE_CATEGORY_FAILED,
               payload: err.response.data.error
           })
          }
      })
}

export const getSingleKPICategoryLoading = () => {
    return{
        type: GET_SINGLE_CATEGORY,
    }
}


export const editKPICategory = (id) => async dispatch => {
    dispatch(getEditKPICategoryLoading());
    await axios.get(`/kpi/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:EDIT_CATEGORY_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: EDIT_CATEGORY_FAILED,
               payload: err.response
           })
          }
      })
}

export const getEditKPICategoryLoading = () => {
    return{
        type: EDIT_CATEGORY,
    }
}