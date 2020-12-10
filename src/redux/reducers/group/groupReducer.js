import {
    CREATE_GROUP,
    CREATE_GROUP_SUCCESS,
    CREATE_GROUP_FAILED,
    GET_GROUP_LIST,
    GET_GROUP_LIST_SUCCESS,
    GET_GROUP_LIST_FAILED,
    GET_SINGLE_GROUP,
    GET_SINGLE_GROUP_SUCCESS,
    GET_SINGLE_GROUP_FAILED,
    EDIT_GROUP,
    EDIT_GROUP_SUCCESS,
    EDIT_GROUP_FAILED,
    DELETE_GROUP,
    DELETE_GROUP_SUCCESS,
    DELETE_GROUP_FAILED
  } from '../../constants/group/index';
  
  const INIT_STATE = {
    group: {},
    groupList: {},
    error: false,
    loading: false,
  }
  
  
  export const groupReducer =  (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_GROUP_LIST: {
        return { ...state, loading: true }
      }
      
    case GET_GROUP_LIST_SUCCESS: 
        return { ...state, groupList: payload, loading: false};
      
    
    case GET_GROUP_LIST_FAILED:
      return { ...state,   error: payload , loading: false}
      
      case GET_SINGLE_GROUP: {
        return { ...state, loading: true }
      }
      
    case GET_SINGLE_GROUP_SUCCESS: 
        return { ...state, group: payload, loading: false};
      
    case GET_SINGLE_GROUP_FAILED:
      return { ...state,   error: payload , loading: false}
      
    case CREATE_GROUP: 
        return { ...state,  loading: true};
      
      
    case CREATE_GROUP_SUCCESS:
      return { ...state,  group: payload, loading: false} 
      
      
    case CREATE_GROUP_FAILED: {
        return { ...state,  error: payload, loading: false}
     }
      
     case EDIT_GROUP: 
     return { ...state,  loading: true};
   
   
    case EDIT_GROUP_SUCCESS:
    return { ...state,  group: payload, loading: false} 
    
    
    case EDIT_GROUP_FAILED: {
        return { ...state,  error: payload, loading: false}
    }
    
    
    case DELETE_GROUP: 
        return { ...state,  loading: true};
      
      
    case DELETE_GROUP_SUCCESS:
      return { ...state,  loading: false} 
      
      
    case DELETE_GROUP_FAILED: {
        return { ...state,  error: payload, loading: false}
     }
      default: {
        return state
      }
    }
  }
  