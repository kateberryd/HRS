import {
    CREATE_CONTENT,
    CREATE_CONTENT_SUCCESS,
    CREATE_CONTENT_FAILED,
    GET_CONTENT_LIST,
    GET_CONTENT_LIST_SUCCESS,
    GET_CONTENT_LIST_FAILED,
    GET_SINGLE_CONTENT,
    GET_SINGLE_CONTENT_SUCCESS,
    GET_SINGLE_CONTENT_FAILED,
    EDIT_CONTENT,
    EDIT_CONTENT_SUCCESS,
    EDIT_CONTENT_FAILED,
    DELETE_CONTENT_SUCCESS,
    DELETE_CONTENT_FAILED,
  } from '../../constants/content/index';
  
  const INIT_STATE = {
    content: null,
    contentList: null,
    error: false,
    loading: false,
  }
  
  
  export const contentReducer =  (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_CONTENT_LIST: 
        return { ...state }
      
      
    case GET_CONTENT_LIST_SUCCESS: 
        return { ...state, contentList: payload};
      
    
    case GET_CONTENT_LIST_FAILED:
      return { ...state,   error: payload }
      
      
    case CREATE_CONTENT: 
        return { ...state,  loading: true};
      
      
    case CREATE_CONTENT_SUCCESS:
      return { ...state,  content: payload, loading: false} 
      
      
    case CREATE_CONTENT_FAILED: 
        return { ...state, error: payload, loading: false}
     
    
     case GET_SINGLE_CONTENT: 
        return { ...state,  loading: true};
      
      
    case GET_SINGLE_CONTENT_SUCCESS:
      return { ...state,  content: payload, loading: false} 
      
      
    case GET_SINGLE_CONTENT_FAILED: 
        return { ...state,  error: payload, loading: false}   

    case EDIT_CONTENT: 
    return { ...state,  loading: true};
  
  
    case EDIT_CONTENT_SUCCESS:
    return { ...state,  content: payload, loading: false} 
    
    
    case EDIT_CONTENT_FAILED: 
        return { ...state,  error: payload, loading: false}
  
    case DELETE_CONTENT_SUCCESS:
          return { ...state,  content: payload, loading: false} 
          
          
    case DELETE_CONTENT_FAILED: 
           return { ...state,  error: payload, loading: false}
       
      
      default: {
        return state
      }
    }
  }
  