import axios from "../../../utility/axios"
import Axios from "axios"
import { toast } from 'react-toastify';
import {
    CREATE_CONTENT,
    CREATE_CONTENT_SUCCESS,
    CREATE_CONTENT_FAILED,
    GET_CONTENT_LIST,
    GET_CONTENT_LIST_SUCCESS,
    GET_CONTENT_LIST_FAILED,
    GET_SINGLE_CONTENT,
    GET_SINGLE_CONTENT_SUCCESS,
    GET_SINGLE_CONTENT_FAILED,
    EDIT_CONTENT,
    EDIT_CONTENT_SUCCESS,
    EDIT_CONTENT_FAILED,
    DELETE_CONTENT_SUCCESS,
    DELETE_CONTENT_FAILED,
  } from '../../constants/content/index';

 export const createContent = (formData) => async dispatch => {
       dispatch(setCreateContentLoading());
       let fd = new FormData()
       fd.append("file", formData.attachment)
       fd.append("upload_preset", "oebydoly")
       let uploadedImage = await Axios.post("https://api.cloudinary.com/v1_1/nhub-kate/image/upload",fd)
       await axios
       .post("/content", {
         title: formData.title,
         description: formData.description,
         attachment: uploadedImage.data.url
       }).then(res => {
           console.log(res.data)
           if(res.data){
            dispatch({
                type:CREATE_CONTENT_SUCCESS,
                payload: res.data.data
            })
            toast.success(res.data.message)
           }
          })
          .catch(err => {
              console.log(err.response)
             if(err){
              dispatch({
                  type: CREATE_CONTENT_FAILED,
                  payload: err.response
              })
             }
         })
   }
   
   export const setCreateContentLoading = () => {
       return{
           type: CREATE_CONTENT,
       }
   }
   
   
export const getContentList = () => async dispatch => {
 try{
    dispatch(getContentListLoading());
    await axios.get('/content')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_CONTENT_LIST_SUCCESS,
             payload: res.data.data
         })
        }
            console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_CONTENT_LIST_FAILED,
               payload: err.response
           })
          }
      })
 }
 catch(error){
     console.log(error)
 }
}

export const getContentListLoading = () => {
    return{
        type: GET_CONTENT_LIST,
    }
}



export const deleteContent = (id) => async dispatch => {
    console.log(id)
    await axios.delete(`/content/single/?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_CONTENT_SUCCESS,
             payload: res.data.data
         })
         toast.error(res.data.message)
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: DELETE_CONTENT_FAILED,
               payload: err.response
           })
          }
      })
}


export const getSingleContent = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleContentLoading());
    await axios.get(`/content/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_CONTENT_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: GET_SINGLE_CONTENT_FAILED,
               payload: err.response.data.error
           })
          }
      })
}

export const getSingleContentLoading = () => {
    return{
        type: GET_SINGLE_CONTENT,
    }
}


export const editContent = (id) => async dispatch => {
    dispatch(editContentLoading());
    await axios.get(`/user-management/get-single-user/${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:EDIT_CONTENT_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: EDIT_CONTENT_FAILED,
               payload: err.response
           })
          }
      })
}

export const editContentLoading = () => {
    return{
        type: EDIT_CONTENT,
    }
}
