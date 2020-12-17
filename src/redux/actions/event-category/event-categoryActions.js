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
  
 export const createEventCategory = (formData) => async dispatch => {
     console.log(formData)
       dispatch(setCreatEventCategoryLoading());
       await axios
       .post("/event-category", {
        name: formData.name,
        icon: formData.icon_link
       }).then(res => {
           console.log(res.data)
           if(res.data){
            dispatch({
                type:CREATE_CATEGORY_SUCCESS,
                payload: res.data.data
            })
           }
           toast.success("Event created succesfuly")
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
   
   export const setCreatEventCategoryLoading = () => {
       return{
           type: CREATE_CATEGORY,
       }
   }
   
   
   export const getEventCategoryList = () => async dispatch => {
    dispatch(getEventCategoryListLoading());
    await axios.get('/event-category')
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

export const getEventCategoryListLoading = () => {
    return{
        type: GET_CATEGORY_LIST,
    }
}



export const deleteEventCategory = (id) => async dispatch => {
    console.log(id)
    await axios.delete(`/event-category/single?id=${id}`)
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


export const getSingleEventCategory = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleEventCategoryLoading());
    await axios.get(`/event-category/single?id=${id}`)
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

export const getSingleEventCategoryLoading = () => {
    return{
        type: GET_SINGLE_CATEGORY,
    }
}


export const editEventCategory = (id) => async dispatch => {
    dispatch(getEditEventCategoryLoading());
    await axios.get(`/event-category/single?id=${id}`)
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

export const getEditEventCategoryLoading = () => {
    return{
        type: EDIT_CATEGORY,
    }
}