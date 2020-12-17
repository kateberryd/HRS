import {
    GET_SICKNESS_LIST,
    GET_SICKNESS_LIST_SUCCESS,
    GET_SICKNESS_LIST_FAILED,
    GET_SINGLE_SICKNESS,
    GET_SINGLE_SICKNESS_SUCCESS,
    GET_SINGLE_SICKNESS_FAILED,
    CLOSE_SICKNESS,
    CLOSE_SICKNESS_SUCCESS,
    CLOSE_SICKNESS_FAILED,
    DELETE_SICKNESS_SUCCESS,
    DELETE_SICKNESS_FAILED
   } from '../../constants/sickness/index';
  
    
    const INIT_STATE = {
      sickness: null,
      sicknessList: null,
      error: false,
      loading: false,
    }
    
    
    export const sicknessReducer =  (state = INIT_STATE, action) => {
      const { type, payload } = action;
      switch (type) {      
   
      
     case GET_SICKNESS_LIST: 
          return { ...state,  loading: true};
        
        
      case GET_SICKNESS_LIST_SUCCESS:
        return { ...state,  sicknessList: payload, loading: false} 
        
        
      case GET_SICKNESS_LIST_FAILED: 
          return { ...state,  error: payload, loading: false}
          
      case GET_SINGLE_SICKNESS: 
          return { ...state,  loading: true};
        
        
      case GET_SINGLE_SICKNESS_SUCCESS:
        return { ...state,  sickness: payload, loading: false} 
        
        
      case GET_SINGLE_SICKNESS_FAILED: 
          return { ...state,  error: payload, loading: false}
      
       case CLOSE_SICKNESS: 
       return { ...state,  loading: true};
     
     
      case CLOSE_SICKNESS_SUCCESS:
        return { ...state,  sickness: payload, loading: false} 
        
        
      case CLOSE_SICKNESS_FAILED: 
           return { ...state,  error: payload, loading: false}
         
      case DELETE_SICKNESS_SUCCESS:
            return { ...state,  sickness: payload, loading: false} 
            
            
      case DELETE_SICKNESS_FAILED: 
             return { ...state,  error: payload, loading: false}
         
        
        default: {
          return state
        }
      }
    }
    