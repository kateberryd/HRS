import axios from "../../../utility/axios"
import { toast } from 'react-toastify';
import { history } from "../../../history"
import {
    CREATE_ROLE,
    CREATE_ROLE_SUCCESS,
    CREATE_ROLE_FAILED,
    GET_ROLE_LIST,
    GET_ROLE_LIST_SUCCESS,
    GET_ROLE_LIST_FAILED,
    GET_SINGLE_ROLE,
    GET_SINGLE_ROLE_SUCCESS,
    GET_SINGLE_ROLE_FAILED,
    EDIT_ROLE,
    EDIT_ROLE_SUCCESS,
    EDIT_ROLE_FAILED,
    DELETE_ROLE_SUCCESS,
    DELETE_ROLE_FAILED,
  } from '../../constants/role/index';

 export const createRole = (formData) => async dispatch => {
       dispatch(createRoleLoading());
       await axios
       .post("/role", {
         name: formData.name
       }).then(res => {
           console.log(res.data)
           if(res.data){
            dispatch({
                type:CREATE_ROLE_SUCCESS,
                payload: res.data.data
            })
            toast.success("Role created successful")
           }
          })
          .catch(err => {
              console.log(err.response)
             if(err){
              dispatch({
                  type: CREATE_ROLE_FAILED,
                  payload: err.response.data
              })
             }
         })
   }
   
   export const createRoleLoading = () => {
       return{
           type: CREATE_ROLE,
       }
   }
   
   
   export const getRoleList = () => async dispatch => {
    dispatch(getRoleListLoading());
    await axios.get('/role')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_ROLE_LIST_SUCCESS,
             payload: res.data.data
         })
        }
        console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_ROLE_LIST_FAILED,
               payload: err.response.data
           })
          }
      })
}

export const getRoleListLoading = () => {
    return{
        type: GET_ROLE_LIST,
    }
}



export const deleteRole = (id) => async dispatch => {
    await axios.delete(`/campus/single/?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_ROLE_SUCCESS,
             payload: res.data.data
         })
         history.push("/add-campus")
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: DELETE_ROLE_FAILED,
               payload: err.response
           })
          }
      })
}


export const getSingleRole = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleRoleLoading());
    await axios.get(`/campus/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_ROLE_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: GET_SINGLE_ROLE_FAILED,
               payload: err.response.data.error
           })
          }
      })
}

export const getSingleRoleLoading = () => {
    return{
        type: GET_SINGLE_ROLE,
    }
}


export const editRole = (id) => async dispatch => {
    dispatch(getEditRoleLoading());
    await axios.get(`/user-management/get-single-user/${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:EDIT_ROLE_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: EDIT_ROLE_FAILED,
               payload: err.response
           })
          }
      })
}

export const getEditRoleLoading = () => {
    return{
        type: EDIT_ROLE,
    }
}