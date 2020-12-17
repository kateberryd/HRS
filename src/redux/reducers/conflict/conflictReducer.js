import {
   GET_CONFLICT_LIST,
   GET_CONFLICT_LIST_SUCCESS,
   GET_CONFLICT_LIST_FAILED,
   GET_SINGLE_CONFLICT,
   GET_SINGLE_CONFLICT_SUCCESS,
   GET_SINGLE_CONFLICT_FAILED,
   CLOSE_CONFLICT,
   CLOSE_CONFLICT_SUCCESS,
   CLOSE_CONFLICT_FAILED,
   DELETE_CONFLICT_SUCCESS,
   DELETE_CONFLICT_FAILED,
   } from '../../constants/conflict/index';
  
    
    const INIT_STATE = {
      conflict: null,
      conflictList: null,
      error: false,
      loading: false,
    }
    
    
    export const conflictReducer =  (state = INIT_STATE, action) => {
      const { type, payload } = action;
      switch (type) {      
   
      
     case GET_CONFLICT_LIST: 
          return { ...state,  loading: true};
        
        
      case GET_CONFLICT_LIST_SUCCESS:
        return { ...state,  conflictList: payload, loading: false} 
        
        
      case GET_CONFLICT_LIST_FAILED: 
          return { ...state,  error: payload, loading: false}
          
      case GET_SINGLE_CONFLICT: 
          return { ...state,  loading: true};
        
        
      case GET_SINGLE_CONFLICT_SUCCESS:
        return { ...state,  conflict: payload, loading: false} 
        
        
      case GET_SINGLE_CONFLICT_FAILED: 
          return { ...state,  error: payload, loading: false}
      
       case CLOSE_CONFLICT: 
       return { ...state,  loading: true};
     
     
      case CLOSE_CONFLICT_SUCCESS:
        return { ...state,  conflict: payload, loading: false} 
        
        
      case CLOSE_CONFLICT_FAILED: 
           return { ...state,  error: payload, loading: false}
         
      case DELETE_CONFLICT_SUCCESS:
            return { ...state,  conflict: payload, loading: false} 
            
            
      case DELETE_CONFLICT_FAILED: 
             return { ...state,  error: payload, loading: false}
         
        
        default: {
          return state
        }
      }
    }
    