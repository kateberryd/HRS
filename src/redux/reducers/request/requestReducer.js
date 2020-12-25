import {
    GET_REQUEST_LIST,
    GET_REQUEST_LIST_SUCCESS,
    GET_REQUEST_LIST_FAILED,
    GET_SINGLE_REQUEST,
    GET_SINGLE_REQUEST_SUCCESS,
    GET_SINGLE_REQUEST_FAILED,
    EDIT_REQUEST,
    EDIT_REQUEST_SUCCESS,
    EDIT_REQUEST_FAILED,
    CLOSE_INCIDENT,
    CLOSE_INCIDENT_SUCCESS,
    CLOSE_INCIDENT_FAILED,
    DELETE_REQUEST_SUCCESS,
    DELETE_REQUEST_FAILED,
  } from '../../constants/request/index';
  
  const INIT_STATE = {
    request: null,
    requestList: {},
    error: false,
    loading: false,
  }
  
  
  export const requestReducer =  (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_REQUEST_LIST: 
        return { ...state }
      
      
    case GET_REQUEST_LIST_SUCCESS: 
        return { ...state, requestList: payload};
      
    
    case GET_REQUEST_LIST_FAILED:
      return { ...state,   error: payload }

    
    case GET_SINGLE_REQUEST: 
        return { ...state,  loading: true};
      
      
    case GET_SINGLE_REQUEST_SUCCESS:
      return { ...state,  request: payload, loading: false} 
      
      
    case GET_SINGLE_REQUEST_FAILED: 
        return { ...state,  error: payload, loading: false}
    
    case CLOSE_INCIDENT: 
     return { ...state,  loading: true};
   
   
    case CLOSE_INCIDENT_SUCCESS:
      return { ...state,  request: payload, loading: false} 
      
      
    case CLOSE_INCIDENT_FAILED: 
         return { ...state,  error: payload, loading: false}
         

    case EDIT_REQUEST: 
    return { ...state,  loading: true};
  
  
    case EDIT_REQUEST_SUCCESS:
    return { ...state,  request: payload, loading: false} 
    
    
    case EDIT_REQUEST_FAILED: 
        return { ...state,  error: payload, loading: false}
  
    case DELETE_REQUEST_SUCCESS:
          return { ...state,  request: payload, loading: false} 
          
          
    case DELETE_REQUEST_FAILED: 
           return { ...state,  error: payload, loading: false}
       
      
      default: {
        return state
      }
    }
  }
  