import {
  GET_USER_LIST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
  GET_SINGLE_USER,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILED,
} from '../../constants/user/index';

const INIT_STATE = {
  userList: {},
  user: {},
  error: false,
}


export const userList = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case GET_USER_LIST: {
      return { ...state }
    }
    
    case GET_USER_LIST_SUCCESS: 
      return { ...state, userList: payload};
    
  
    case GET_USER_LIST_FAILED:
    return { ...state,   error: payload }
    
    case GET_SINGLE_USER: {
      return { ...state }
    }
    
    case GET_SINGLE_USER_SUCCESS: 
      return { ...state, user: payload};
    
  
    case GET_SINGLE_USER_FAILED:
    return { ...state,  error: payload }
    default: {
      return state
    }
  }
}
