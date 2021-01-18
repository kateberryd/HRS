import axios from "../../../utility/axios"
import { toast } from 'react-toastify';
import { history } from "../../../history"
import {
    CREATE_CAMPUS,
    CREATE_CAMPUS_SUCCESS,
    CREATE_CAMPUS_FAILED,
    GET_CAMPUS_LIST,
    GET_CAMPUS_LIST_SUCCESS,
    GET_CAMPUS_LIST_FAILED,
    GET_SINGLE_CAMPUS,
    GET_SINGLE_CAMPUS_SUCCESS,
    GET_SINGLE_CAMPUS_FAILED,
    EDIT_CAMPUS,
    EDIT_CAMPUS_SUCCESS,
    EDIT_CAMPUS_FAILED,
    DELETE_CAMPUS_SUCCESS,
    DELETE_CAMPUS_FAILED,
  } from '../../constants/campus/index';

 export const createCampus = (formData) => async dispatch => {
       dispatch(setCampusLoading());
       await axios
       .post("/campus", {
         name: formData.name,
         global_senior_pastor: formData.senior_pastor,
         SPMO: formData.spmo,
         campus_pastor: formData.campus_pastor,
         group_head: formData.group_head,
         HOD: formData.hod,
         asst_HOD: formData.asst_hod,
         campus_coordinator: formData.campus_coordinator
       }).then(res => {
           console.log(res.data)
           if(res.data){
            dispatch({
                type:CREATE_CAMPUS_SUCCESS,
                payload: res.data.data
            })
           }
           toast.success("Campus Created Successfully")
        })
          .catch(err => {
              console.log(err.response)
             if(err){
              dispatch({
                  type: CREATE_CAMPUS_FAILED,
                  payload: err.response
              })
             }
         })
   }
   
   export const setCampusLoading = () => {
       return{
           type: CREATE_CAMPUS,
       }
   }
   
   
   export const getCampusList = () => async dispatch => {
    dispatch(setCampusListLoading());
    await axios.get('/campus')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_CAMPUS_LIST_SUCCESS,
             payload: res.data.data
         })
        }
            console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_CAMPUS_LIST_FAILED,
               payload: err.response
           })
          }
      })
}

export const setCampusListLoading = () => {
    return{
        type: GET_CAMPUS_LIST,
    }
}



export const deleteCampus = (id) => async dispatch => {
    await axios.delete(`/campus/single/?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_CAMPUS_SUCCESS,
             payload: res.data.data
         })
         history.push("/add-campus")
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: DELETE_CAMPUS_FAILED,
               payload: err.response
           })
          }
      })
}


export const getSingleCampus = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleCampusLoading());
    await axios.get(`/campus/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_CAMPUS_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response.data)
          if(err){
           dispatch({
               type: GET_SINGLE_CAMPUS_FAILED,
               payload: err.response.data
           })
          }
      })
}

export const getSingleCampusLoading = () => {
    return{
        type: GET_SINGLE_CAMPUS,
    }
}


export const editCampus = (id) => async dispatch => {
    dispatch(getCampusLoading());
    await axios.get(`/user-management/get-single-user/${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:EDIT_CAMPUS_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: EDIT_CAMPUS_FAILED,
               payload: err.response
           })
          }
      })
}

export const getCampusLoading = () => {
    return{
        type: EDIT_CAMPUS,
    }
}



export const addCampusWorker = ({worker, campus}) => async dispatch => {
    dispatch(setCampusLoading());
    await axios
    .put(`/campus/single?id=${campus}`, {
      workers: worker[0]._id
    }).then(res => {
        if(res.data){
         dispatch({
             type:CREATE_CAMPUS_SUCCESS,
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
               type: CREATE_CAMPUS_FAILED,
               payload: err.response
           })
          }
      })
}