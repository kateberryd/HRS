import {
  GET_USER_LIST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
  GET_SINGLE_USER,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILED,
  GET_UNAPROVE_USER_LIST,
  GET_UNAPROVE_USER_LIST_SUCCESS,
  GET_UNAPROVE_USER_LIST_FAILED,
  APPROVE_USER,
  APPROVE_USER_SUCCESS,
  APPROVE_USER_FAILED,
  SUSPEND_USER,
  SUSPEND_USER_SUCCESS,
  SUSPEND_USER_FAILED,
  ACTIVATE_USER,
  ACTIVATE_USER_SUCCESS,
  ACTIVATE_USER_FAILED,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED
} from '../../constants/user/index';

const INIT_STATE = {
  userList: {},
  user: {},
  unapproveUsers: null,
  error: false,
}


export const userList = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_LIST: {
      return { ...state }
    }
    
    case GET_USER_LIST_SUCCESS: 
      return { ...state, userList: payload};
    
  
    case GET_USER_LIST_FAILED:
    return { ...state,   error: payload }
    
  case GET_UNAPROVE_USER_LIST: {
      return { ...state }
    }
    
    case GET_UNAPROVE_USER_LIST_SUCCESS: 
      return { ...state, unapproveUsers: payload};
    
    case GET_UNAPROVE_USER_LIST_FAILED:
    return { ...state,   error: payload }
    
    case APPROVE_USER: {
      return { ...state }
    }
    
    case APPROVE_USER_SUCCESS: 
      return { ...state, userList: payload};
    
  
    case APPROVE_USER_FAILED:
    return { ...state,   error: payload }
    
    case GET_SINGLE_USER: {
      return { ...state }
    }
    
    case GET_SINGLE_USER_SUCCESS: 
      return { ...state, user: payload};
    
  
    case GET_SINGLE_USER_FAILED:
    return { ...state,  error: payload }
    
    case SUSPEND_USER: {
      return { ...state }
    }
    
    case SUSPEND_USER_SUCCESS: 
      return { ...state, user: payload};
    
  
    case SUSPEND_USER_FAILED:
    return { ...state,  error: payload }
    
    case ACTIVATE_USER: {
      return { ...state }
    }
    
    case ACTIVATE_USER_SUCCESS: 
      return { ...state, user: payload};
    
  
    case ACTIVATE_USER_FAILED:
    return { ...state,  error: payload }
    
    case DELETE_USER_SUCCESS: 
    return { ...state, user: {}};
  

  case DELETE_USER_FAILED:
  return { ...state,  error: payload }
    default: {
      return state
    }
  }
}
