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
  
  const INIT_STATE = {
    role: null,
    roleList: {},
    error: false,
    loading: false,
  }
  
  
  export const roleReducer =  (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_ROLE_LIST: 
        return { ...state }
      
      
    case GET_ROLE_LIST_SUCCESS: 
        return { ...state, roleList: payload};
      
    
    case GET_ROLE_LIST_FAILED:
      return { ...state,   error: payload }
      
      
    case CREATE_ROLE: 
        return { ...state,  loading: true};
      
      
    case CREATE_ROLE_SUCCESS:
      return { ...state,  role: payload, loading: false} 
      
      
    case CREATE_ROLE_FAILED: 
        return { ...state, error: payload, loading: false}
     
    
     case GET_SINGLE_ROLE: 
        return { ...state,  loading: true};
      
      
    case GET_SINGLE_ROLE_SUCCESS:
      return { ...state,  role: payload, loading: false} 
      
      
    case GET_SINGLE_ROLE_FAILED: 
        return { ...state,  error: payload, loading: false}
    
     case EDIT_ROLE: 
     return { ...state,  loading: true};
   
   
    case EDIT_ROLE_SUCCESS:
      return { ...state,  role: payload, loading: false} 
      
      
    case EDIT_ROLE_FAILED: 
         return { ...state,  error: payload, loading: false}
       
    case DELETE_ROLE_SUCCESS:
          return { ...state,  role: payload, loading: false} 
          
          
    case DELETE_ROLE_FAILED: 
           return { ...state,  error: payload, loading: false}
       
      
      default: {
        return state
      }
    }
  }
  