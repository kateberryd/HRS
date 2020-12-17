import axios from "../../../utility/axios"
import { toast } from 'react-toastify';
// import { history } from "../../../history"
import {
    CREATE_EVENT,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_FAILED,
    GET_EVENT_LIST,
    GET_EVENT_LIST_SUCCESS,
    GET_EVENT_LIST_FAILED,
    GET_SINGLE_EVENT,
    GET_SINGLE_EVENT_SUCCESS,
    GET_SINGLE_EVENT_FAILED,
    EDIT_EVENT,
    EDIT_EVENT_SUCCESS,
    EDIT_EVENT_FAILED,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_FAILED,
  } from '../../constants/event/index';
  
 export const createEvent = (formData) => async dispatch => {
       dispatch(setCreatEventLOading());
       await axios
       .post("/event", {
         title: formData.name,
         category: formData.category,
         date: formData.date,
         time: formData.dateTime,
         location: formData.location,
         description: formData.description,
         coverImage: formData.image
       }).then(res => {
           console.log(res.data)
           if(res.data){
            dispatch({
                type:CREATE_EVENT_SUCCESS,
                payload: res.data.data
            })
           }
           toast.success("Event created succesfuly")
          })
          .catch(err => {
              console.log(err.response)
             if(err){
              dispatch({
                  type: CREATE_EVENT_FAILED,
                  payload: err.response
              })
             }
         })
   }
   
   export const setCreatEventLOading = () => {
       return{
           type: CREATE_EVENT,
       }
   }
   
   
   export const getEventList = () => async dispatch => {
    dispatch(getEventLoading());
    await axios.get('/event')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_EVENT_LIST_SUCCESS,
             payload: res.data.data
         })
        }
            console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_EVENT_LIST_FAILED,
               payload: err.response
           })
          }
      })
}

export const getEventLoading = () => {
    return{
        type: GET_EVENT_LIST,
    }
}



export const deleteEvent = (id) => async dispatch => {
    await axios.delete(`/event/single/?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_EVENT_SUCCESS,
             payload: res.data.data
         })
        //  history.push("/add-event")
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: DELETE_EVENT_FAILED,
               payload: err.response
           })
          }
      })
}


export const getSingleEvent = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleEventLoading());
    await axios.get(`/event/single?id=${id}`)
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_SINGLE_EVENT_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: GET_SINGLE_EVENT_FAILED,
               payload: err.response.data.error
           })
          }
      })
}

export const getSingleEventLoading = () => {
    return{
        type: GET_SINGLE_EVENT,
    }
}


export const editEvent= (id) => async dispatch => {
    dispatch(getEditEventLoading());
    await axios.get(`/user-management/get-single-user/${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:EDIT_EVENT_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: EDIT_EVENT_FAILED,
               payload: err.response
           })
          }
      })
}

export const getEditEventLoading = () => {
    return{
        type: EDIT_EVENT,
    }
}