import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from '../../constants/auth/constants';

import {errorReducer} from "../error/index";

const INIT_STATE = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  user: {},
  forgotPassword: null,
  resetPassword: null,
  error: false,
  userRole: 'admin'
}


export const login = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN: {
      return { ...state, loading:true }
    }
    
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      }
    }
    
    case LOGIN_FAILED:
          return {
            ...errorReducer(state, action),
              token: null,
              isAuthenticated: false,
              loading: false,
              user: null,
              message: true
        }
   
    default: {
      return state
    }
  }
}
