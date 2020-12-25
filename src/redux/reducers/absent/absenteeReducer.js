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
  
  const INIT_STATE = {
    absentee: null,
    absenteeList: {},
    error: false,
    loading: false,
  }
  
  
  export const absenteeReducer =  (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_ABSENTEE_LIST: 
        return { ...state }
      
      
    case GET_ABSENTEE_LIST_SUCCESS: 
        return { ...state, absenteeList: payload};
      
    
    case GET_ABSENTEE_LIST_FAILED:
      return { ...state,   error: payload }
      
      
    case CREATE_ABSENTEE: 
        return { ...state,  loading: true};
      
      
    case CREATE_ABSENTEE_SUCCESS:
      return { ...state,  absentee: payload, loading: false} 
      
      
    case CREATE_ABSENTEE_FAILED: 
        return { ...state, error: payload, loading: false}
     
    
     case GET_SINGLE_ABSENTEE: 
        return { ...state,  loading: true};
      
      
    case GET_SINGLE_ABSENTEE_SUCCESS:
      return { ...state,  absentee: payload, loading: false} 
      
      
    case GET_SINGLE_ABSENTEE_FAILED: 
        return { ...state,  error: payload, loading: false}
    
    case CLOSE_INCIDENT: 
     return { ...state,  loading: true};
   
   
    case CLOSE_INCIDENT_SUCCESS:
      return { ...state,  absentee: payload, loading: false} 
      
      
    case CLOSE_INCIDENT_FAILED: 
         return { ...state,  error: payload, loading: false}
         

    case EDIT_ABSENTEE: 
    return { ...state,  loading: true};
  
  
    case EDIT_ABSENTEE_SUCCESS:
    return { ...state,  absentee: payload, loading: false} 
    
    
    case EDIT_ABSENTEE_FAILED: 
        return { ...state,  error: payload, loading: false}
  
    case DELETE_ABSENTEE_SUCCESS:
          return { ...state,  absentee: payload, loading: false} 
          
          
    case DELETE_ABSENTEE_FAILED: 
           return { ...state,  error: payload, loading: false}
       
      
      default: {
        return state
      }
    }
  }
  