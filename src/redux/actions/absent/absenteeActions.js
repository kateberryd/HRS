import axios from "../../../utility/axios"
import { toast } from 'react-toastify';
import {
    CREATE_ABSENTEE,
    CREATE_ABSENTEE_SUCCESS,
    CREATE_ABSENTEE_FAILED,
    GET_ABSENTEE_LIST,
    GET_ABSENTEE_LIST_SUCCESS,
    GET_ABSENTEE_LIST_FAILED,
    GET_SINGLE_ABSENTEE,
    GET_SINGLE_ABSENTEE_SUCCESS,
    GET_SINGLE_ABSENTEE_FAILED,
    EDIT_ABSENTEE,
    EDIT_ABSENTEE_SUCCESS,
    EDIT_ABSENTEE_FAILED,
    CLOSE_INCIDENT,
    CLOSE_INCIDENT_SUCCESS,
    CLOSE_INCIDENT_FAILED,
    DELETE_ABSENTEE_SUCCESS,
    DELETE_ABSENTEE_FAILED,
  } from '../../constants/absent/index';

 export const createAbsentee = (formData) => async dispatch => {
     console.log(formData.absentee[0])
        let absenteeArr = []
        absenteeArr.push(formData.absentee[0]._id)
        console.log(absenteeArr)
       dispatch(setCreateAbsenteeLoading());
       await axios
       .post("/absent", {
         title: formData.title,
         event: formData.event,
         user: absenteeArr,
         description: formData.description
       }).then(res => {
           console.log(res.data)
           if(res.data){
            dispatch({
                type:CREATE_ABSENTEE_SUCCESS,
                payload: res.data.data
            })
            toast.success(res.data.message)
           }
          })
          .catch(err => {
              console.log(err.response)
             if(err){
              dispatch({
                  type: CREATE_ABSENTEE_FAILED,
                  payload: err.response
              })
             }
         })
   }
   
   export const setCreateAbsenteeLoading = () => {
       return{
           type: CREATE_ABSENTEE,
       }
   }
   
   
   export const getAbsenteeList = () => async dispatch => {
       console.log("sjjsjsh")
    dispatch(getAbsenteeListLoading());
    await axios.get('/absent')
       .then(res => {
        if(res.data){
            console.log(res.data)
         dispatch({
             type:GET_ABSENTEE_LIST_SUCCESS,
             payload: res.data.data
         })
        }
            console.log(res.data.data);
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: GET_ABSENTEE_LIST_FAILED,
               payload: err.response
           })
          }
      })
}

export const getAbsenteeListLoading = () => {
    return{
        type: GET_ABSENTEE_LIST,
    }
}



export const deleteAbsentee = (id) => async dispatch => {
    console.log(id)
    await axios.delete(`/absent/single/?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:DELETE_ABSENTEE_SUCCESS,
             payload: res.data.data
         })
         toast.error(res.data.message)
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: DELETE_ABSENTEE_FAILED,
               payload: err.response
           })
          }
      })
}


export const getSingleAbsentee = (id) => async dispatch => {
    console.log(id)
    dispatch(getSingleAbsenteeLoading());
    await axios.get(`/absent/single?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:GET_SINGLE_ABSENTEE_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response.data.error)
          if(err){
           dispatch({
               type: GET_SINGLE_ABSENTEE_FAILED,
               payload: err.response.data.error
           })
          }
      })
}

export const getSingleAbsenteeLoading = () => {
    return{
        type: GET_SINGLE_ABSENTEE,
    }
}


export const editAbsentee = (id) => async dispatch => {
    dispatch(editAbsenteeLoading());
    await axios.get(`/user-management/get-single-user/${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:EDIT_ABSENTEE_SUCCESS,
             payload: res.data.data
         })
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: EDIT_ABSENTEE_FAILED,
               payload: err.response
           })
          }
      })
}

export const editAbsenteeLoading = () => {
    return{
        type: EDIT_ABSENTEE,
    }
}

export const closeIncident = (id) => async dispatch => {
    console.log(id)
    dispatch(getCloseIncidentLoading());
    await axios.get(`/absent/close-absent-incident?id=${id}`)
       .then(res => {
        if(res.data){
         dispatch({
             type:CLOSE_INCIDENT_SUCCESS,
             payload: res.data.data
         })
         toast.success(res.data.message)
        }
       })
       .catch(err => {
           console.log(err.response)
          if(err){
           dispatch({
               type: CLOSE_INCIDENT_FAILED,
               payload: err.response
           })
          }
      })
}

export const getCloseIncidentLoading = () => {
    return{
        type: CLOSE_INCIDENT,
    }
}