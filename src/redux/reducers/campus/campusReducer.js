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
  
  const INIT_STATE = {
    campus: {},
    campusList: {},
    error: false,
    loading: false,
  }
  
  
  export const campusReducer =  (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_CAMPUS_LIST: 
        return { ...state }
      
      
    case GET_CAMPUS_LIST_SUCCESS: 
        return { ...state, campusList: payload};
      
    
    case GET_CAMPUS_LIST_FAILED:
      return { ...state,   error: payload }
      
      
    case CREATE_CAMPUS: 
        return { ...state,  loading: true};
      
      
    case CREATE_CAMPUS_SUCCESS:
      return { ...state,  campus: payload, loading: false} 
      
      
    case CREATE_CAMPUS_FAILED: 
        return { ...state, error: payload, loading: false}
     
    
     case GET_SINGLE_CAMPUS: 
        return { ...state,  loading: true};
      
      
    case GET_SINGLE_CAMPUS_SUCCESS:
      return { ...state,  campus: payload, loading: false} 
      
      
    case GET_SINGLE_CAMPUS_FAILED: 
        return { ...state,  error: payload, loading: false}
    
     case EDIT_CAMPUS: 
     return { ...state,  loading: true};
   
   
    case EDIT_CAMPUS_SUCCESS:
      return { ...state,  campus: payload, loading: false} 
      
      
    case EDIT_CAMPUS_FAILED: 
         return { ...state,  error: payload, loading: false}
       
    case DELETE_CAMPUS_SUCCESS:
          return { ...state,  campus: payload, loading: false} 
          
          
    case DELETE_CAMPUS_FAILED: 
           return { ...state,  error: payload, loading: false}
       
      
      default: {
        return state
      }
    }
  }
  