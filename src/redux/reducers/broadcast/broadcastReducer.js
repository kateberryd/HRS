import {
    CREATE_BROADCAST,
    CREATE_BROADCAST_SUCCESS,
    CREATE_BROADCAST_FAILED,
    GET_BROADCAST_LIST,
    GET_BROADCAST_LIST_SUCCESS,
    GET_BROADCAST_LIST_FAILED,
    GET_SINGLE_BROADCAST,
    GET_SINGLE_BROADCAST_SUCCESS,
    GET_SINGLE_BROADCAST_FAILED,
    EDIT_BROADCAST,
    EDIT_BROADCAST_SUCCESS,
    EDIT_BROADCAST_FAILED,
    DELETE_BROADCAST_SUCCESS,
    DELETE_BROADCAST_FAILED,
  } from '../../constants/broadcast/index';
  
  const INIT_STATE = {
    broadcast: null,
    broadcastList: {},
    error: false,
    loading: false,
  }
  
  
  export const broadcastReducer =  (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_BROADCAST_LIST: 
        return { ...state }
      
      
    case GET_BROADCAST_LIST_SUCCESS: 
        return { ...state, broadcastList: payload};
      
    
    case GET_BROADCAST_LIST_FAILED:
      return { ...state,   error: payload }
      
      
    case CREATE_BROADCAST: 
        return { ...state,  loading: true};
      
      
    case CREATE_BROADCAST_SUCCESS:
      return { ...state,  broadcast: payload, loading: false} 
      
      
    case CREATE_BROADCAST_FAILED: 
        return { ...state, error: payload, loading: false}
     
    
     case GET_SINGLE_BROADCAST: 
        return { ...state,  loading: true};
      
      
    case GET_SINGLE_BROADCAST_SUCCESS:
      return { ...state,  broadcast: payload, loading: false} 
      
      
    case GET_SINGLE_BROADCAST_FAILED: 
        return { ...state,  error: payload, loading: false}
    
     case EDIT_BROADCAST: 
     return { ...state,  loading: true};
   
   
    case EDIT_BROADCAST_SUCCESS:
      return { ...state,  broadcast: payload, loading: false} 
      
      
    case EDIT_BROADCAST_FAILED: 
         return { ...state,  error: payload, loading: false}
       
    case DELETE_BROADCAST_SUCCESS:
          return { ...state,  broadcast: payload, loading: false} 
          
          
    case DELETE_BROADCAST_FAILED: 
           return { ...state,  error: payload, loading: false}
       
      
      default: {
        return state
      }
    }
  }
  