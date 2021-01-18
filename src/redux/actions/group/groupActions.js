import axios from "../../../utility/axios"
import { toast } from 'react-toastify';
import { history } from "../../../history"
import {
    CREATE_GROUP,
    CREATE_GROUP_SUCCESS,
    CREATE_GROUP_FAILED,
    GET_GROUP_LIST,
    GET_GROUP_LIST_SUCCESS,
    GET_GROUP_LIST_FAILED,
    EDIT_GROUP,
    EDIT_GROUP_SUCCESS,
    EDIT_GROUP_FAILED,
    // DELETE_GROUP,
    DELETE_GROUP_SUCCESS,
    DELETE_GROUP_FAILED,
    GET_SINGLE_GROUP,
    GET_SINGLE_GROUP_SUCCESS,
    GET_SINGLE_GROUP_FAILED
  } from "../../constants/group/index"
   
   export const createGroup = (formData) => async dispatch => {
       console.log(formData);
       dispatch(setGroupLoading());
       await axios
       .post("/group", {
         name: formData.name,
         campus: formData.campus,
         state: formData.state,
         country: formData.country,
         address: formData.address
       }).then(res => {
           if(res.data){
            dispatch({
                type:CREATE_GROUP_SUCCESS,
                payload: res.data.data
            })
            toast.success("group created successfully")
           }
            console.log(res.data.data);
          })
          .catch(err => {
              console.log(err.response)
             if(err){
              dispatch({
                  type: CREATE_GROUP_FAILED,
                  payload: err.response
              })
             }
         })
   }
   
   export const setGroupLoading = () => {
       return{
           type: CREATE_GROUP,
       }
   }
   
   
   export const getGroupList = () => async dispatch => {
    dispatch(setGroupListLoading());
    await axios.get('/group')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_GROUP_LIST_SUCCESS,
             payload: res.data.data
         })
        }
            console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_GROUP_LIST_FAILED,
               payload: err.response
           })
          }
      })
}


export const setGroupListLoading = () => {
    return{
        type: GET_GROUP_LIST,
    }
}



export const deleteGroup = (id) => async dispatch => {
    await axios.delete(`/group/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_GROUP_SUCCESS,
             payload: res.data.data
         })
         toast.error("group deleted successfully")
         history.push("/add-group")
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: DELETE_GROUP_FAILED,
               payload: err.response.data.error
           })
          }
      })
}


export const editSingleGroup = (id) => async dispatch => {
    dispatch(setEditSingleGroupLoading());
    await axios.get(`/user-management/get-single-user/${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:EDIT_GROUP_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: EDIT_GROUP_FAILED,
               payload: err.response
           })
          }
      })
}

export const setEditSingleGroupLoading = () => {
    return{
        type: EDIT_GROUP,
    }
}




export const getSingleGroup = (id) => async dispatch => {
    dispatch(getSingleGroupLoading());
    await axios.get(`/group/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_GROUP_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_SINGLE_GROUP_FAILED,
               payload: err.response
           })
          }
      })
}

export const getSingleGroupLoading = () => {
    return{
        type: GET_SINGLE_GROUP,
    }
}


export const addGroupWorker = ({worker, group}) => async dispatch => {
    dispatch(setGroupLoading());
    await axios
    .put(`/group/single?id=${group}`, {
      workers: worker[0]._id
    }).then(res => {
        if(res.data){
         dispatch({
             type:CREATE_GROUP_SUCCESS,
             payload: res.data.data
         })
         toast.success("Worker Added Successfully")
        }
         console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: CREATE_GROUP_FAILED,
               payload: err.response
           })
          }
      })
}