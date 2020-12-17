import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_FAILED,
  GET_SINGLE_CATEGORY,
  GET_SINGLE_CATEGORY_SUCCESS,
  GET_SINGLE_CATEGORY_FAILED,
  EDIT_CATEGORY,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILED,
//    DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED
 } from '../../constants/event-category/index';

  
  const INIT_STATE = {
    category: null,
    categoryList: null,
    error: false,
    loading: false,
  }
  
  
  export const eventCategoryReducer =  (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {      
      
    case CREATE_CATEGORY: 
        return { ...state,  loading: true};
      
      
    case CREATE_CATEGORY_SUCCESS:
      return { ...state,  category: payload, loading: false} 
      
      
    case CREATE_CATEGORY_FAILED: 
        return { ...state, error: payload, loading: false}
     
    
     case GET_CATEGORY_LIST: 
        return { ...state,  loading: true};
      
      
    case GET_CATEGORY_LIST_SUCCESS:
      return { ...state,  categoryList: payload, loading: false} 
      
      
    case GET_CATEGORY_LIST_FAILED: 
        return { ...state,  error: payload, loading: false}
        
        case GET_SINGLE_CATEGORY: 
        return { ...state,  loading: true};
      
      
    case GET_SINGLE_CATEGORY_SUCCESS:
      return { ...state,  category: payload, loading: false} 
      
      
    case GET_SINGLE_CATEGORY_FAILED: 
        return { ...state,  error: payload, loading: false}
    
     case EDIT_CATEGORY: 
     return { ...state,  loading: true};
   
   
    case EDIT_CATEGORY_SUCCESS:
      return { ...state,  category: payload, loading: false} 
      
      
    case EDIT_CATEGORY_FAILED: 
         return { ...state,  error: payload, loading: false}
       
    case DELETE_CATEGORY_SUCCESS:
          return { ...state,  category: payload, loading: false} 
          
          
    case DELETE_CATEGORY_FAILED: 
           return { ...state,  error: payload, loading: false}
       
      
      default: {
        return state
      }
    }
  }
  