import {
    CREATE_DEPARTMENT,
    CREATE_DEPARTMENT_SUCCESS,
    CREATE_DEPARTMENT_FAILED,
    GET_DEPARTMENT_LIST,
    GET_DEPARTMENT_LIST_SUCCESS,
    GET_DEPARTMENT_LIST_FAILED,
    GET_SINGLE_DEPARTMENT,
    GET_SINGLE_DEPARTMENT_SUCCESS,
    GET_SINGLE_DEPARTMENT_FAILED,
    EDIT_DEPARTMENT,
    EDIT_DEPARTMENT_SUCCESS,
    EDIT_DEPARTMENT_FAILED,
    DELETE_DEPARTMENT,
    DELETE_DEPARTMENT_SUCCESS,
    DELETE_DEPARTMENT_FAILED
  } from '../../constants/department/index';
  
  const INIT_STATE = {
    department: {},
    departmentList: {},
    error: false,
    loading: false,
  }
  
  
  export const departmentReducer =  (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_DEPARTMENT_LIST: {
        return { ...state, loading: true }
      }
      
    case GET_DEPARTMENT_LIST_SUCCESS: 
        return { ...state, departmentList: payload, loading: false};
      
    
    case GET_DEPARTMENT_LIST_FAILED:
      return { ...state,   error: payload , loading: false}
      
      case GET_SINGLE_DEPARTMENT: {
        return { ...state, loading: true }
      }
      
    case GET_SINGLE_DEPARTMENT_SUCCESS: 
        return { ...state, department: payload, loading: false};
      
    case GET_SINGLE_DEPARTMENT_FAILED:
      return { ...state,   error: payload , loading: false}
      
    case CREATE_DEPARTMENT: 
        return { ...state,  loading: true};
      
      
    case CREATE_DEPARTMENT_SUCCESS:
      return { ...state,  department: payload, loading: false} 
      
      
    case CREATE_DEPARTMENT_FAILED: {
        return { ...state,  error: payload, loading: false}
     }
      
     case EDIT_DEPARTMENT: 
     return { ...state,  loading: true};
   
   
    case EDIT_DEPARTMENT_SUCCESS:
    return { ...state,  department: payload, loading: false} 
    
    
    case EDIT_DEPARTMENT_FAILED: {
        return { ...state,  error: payload, loading: false}
    }
    
    
    case DELETE_DEPARTMENT: 
        return { ...state,  loading: true};
      
      
    case DELETE_DEPARTMENT_SUCCESS:
        console.log(action)
      return { ...state,  loading: false} 
      
      
    case DELETE_DEPARTMENT_FAILED: {
        return { ...state,  error: payload, loading: false}
     }
      default: {
        return state
      }
    }
  }
  