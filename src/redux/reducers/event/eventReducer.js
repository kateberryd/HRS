import {
    CREATE_EVENT,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_FAILED,
    GET_EVENT_LIST,
    GET_EVENT_LIST_SUCCESS,
    GET_EVENT_LIST_FAILED,
    GET_SINGLE_EVENT,
    GET_SINGLE_EVENT_SUCCESS,
    GET_SINGLE_EVENT_FAILED,
    EDIT_EVENT,
    EDIT_EVENT_SUCCESS,
    EDIT_EVENT_FAILED,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_FAILED,
  } from '../../constants/event/index';
  
  const INIT_STATE = {
    event: null,
    eventList: null,
    error: false,
    loading: false,
  }
  
  
  export const eventReducer =  (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_EVENT_LIST: 
        return { ...state }
      
      
    case GET_EVENT_LIST_SUCCESS: 
        return { ...state, eventList: payload};
      
    
    case GET_EVENT_LIST_FAILED:
      return { ...state,   error: payload }
      
      
    case CREATE_EVENT: 
        return { ...state,  loading: true};
      
      
    case CREATE_EVENT_SUCCESS:
      return { ...state,  event: payload, loading: false} 
      
      
    case CREATE_EVENT_FAILED: 
        return { ...state, error: payload, loading: false}
     
    
     case GET_SINGLE_EVENT: 
        return { ...state,  loading: true};
      
      
    case GET_SINGLE_EVENT_SUCCESS:
      return { ...state,  event: payload, loading: false} 
      
      
    case GET_SINGLE_EVENT_FAILED: 
        return { ...state,  error: payload, loading: false}
    
     case EDIT_EVENT: 
     return { ...state,  loading: true};
   
   
    case EDIT_EVENT_SUCCESS:
      return { ...state,  event: payload, loading: false} 
      
      
    case EDIT_EVENT_FAILED: 
         return { ...state,  error: payload, loading: false}
       
    case DELETE_EVENT_SUCCESS:
          return { ...state,  event: payload, loading: false} 
          
          
    case DELETE_EVENT_FAILED: 
           return { ...state,  error: payload, loading: false}
       
      
      default: {
        return state
      }
    }
  }
  