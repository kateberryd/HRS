import axios from "../../../utility/axios"
import { toast } from 'react-toastify';
import { history } from "../../../history"
import {
    CREATE_DEPARTMENT,
    CREATE_DEPARTMENT_SUCCESS,
    CREATE_DEPARTMENT_FAILED,
    GET_DEPARTMENT_LIST,
    GET_DEPARTMENT_LIST_SUCCESS,
    GET_DEPARTMENT_LIST_FAILED,
    EDIT_DEPARTMENT,
    EDIT_DEPARTMENT_SUCCESS,
    EDIT_DEPARTMENT_FAILED,
    // DELETE_DEPARTMENT,
    DELETE_DEPARTMENT_SUCCESS,
    DELETE_DEPARTMENT_FAILED,
    GET_SINGLE_DEPARTMENT,
    GET_SINGLE_DEPARTMENT_SUCCESS,
    GET_SINGLE_DEPARTMENT_FAILED
  } from "../../constants/department/index"
   
   export const createDepartment = (formData) => async dispatch => {
       console.log(formData);
       dispatch(setDepartmentLoading());
       await axios
       .post("/department", {
         name: formData.name,
         state: formData.state,
         group: formData.group,
         country: formData.country,
         address: formData.address,
         HOD: formData.HOD,
         asst_HOD: formData.asst_HOD
       }).then(res => {
           console.log(res.data)
           if(res.data){
            dispatch({
                type:CREATE_DEPARTMENT_SUCCESS,
                payload: res.data.data
            })
            toast.success("Department created successfully")
           }
            console.log(res.data.data);
          })
          .catch(err => {
              console.log(err.response)
             if(err){
              dispatch({
                  type: CREATE_DEPARTMENT_FAILED,
                  payload: err.response
              })
             }
         })
   }
   
   export const setDepartmentLoading = () => {
       return{
           type: CREATE_DEPARTMENT,
       }
   }
   
   
   export const getDepartmentList = () => async dispatch => {
    dispatch(setDepartmentListLoading());
    await axios.get('/department')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_DEPARTMENT_LIST_SUCCESS,
             payload: res.data.data
         })
        }
            console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_DEPARTMENT_LIST_FAILED,
               payload: err.response
           })
          }
      })
}


export const setDepartmentListLoading = () => {
    return{
        type: GET_DEPARTMENT_LIST,
    }
}



export const deleteDepartment = (id) => async dispatch => {
    await axios.delete(`/department/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_DEPARTMENT_SUCCESS,
             payload: res.data.data
         })
         toast.error("Department deleted successfully")
         history.push("/add-department")
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: DELETE_DEPARTMENT_FAILED,
               payload: err.response.data.error
           })
          }
      })
}


export const EditSingleDepartment = (id) => async dispatch => {
    dispatch(editSingleDepartment());
    await axios.get(`/user-management/get-single-user/${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:EDIT_DEPARTMENT_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: EDIT_DEPARTMENT_FAILED,
               payload: err.response
           })
          }
      })
}

export const editSingleDepartment = () => {
    return{
        type: EDIT_DEPARTMENT,
    }
}




export const getSingleDepartment = (id) => async dispatch => {
    dispatch(getSingleDepartmentLoading());
    await axios.get(`/department/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_DEPARTMENT_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_SINGLE_DEPARTMENT_FAILED,
               payload: err.response
           })
          }
      })
}

export const getSingleDepartmentLoading = () => {
    return{
        type: GET_SINGLE_DEPARTMENT,
    }
}