import {
    GET_QUALITY_ASSURANCE_LIST,
    GET_QUALITY_ASSURANCE_LIST_SUCCESS,
    GET_QUALITY_ASSURANCE_LIST_FAILED,
    GET_SINGLE_QUALITY_ASSURANCE,
    GET_SINGLE_QUALITY_ASSURANCE_SUCCESS,
    GET_SINGLE_QUALITY_ASSURANCE_FAILED,
    CLOSE_QUALITY_ASSURANCE,
    CLOSE_QUALITY_ASSURANCE_SUCCESS,
    CLOSE_QUALITY_ASSURANCE_FAILED,
    DELETE_QUALITY_ASSURANCE_SUCCESS,
    DELETE_QUALITY_ASSURANCE_FAILED
    } from '../../constants/quality-assurance/index';
   
     
     const INIT_STATE = {
       qualityAssurance: null,
       qualityAssuranceList: null,
       error: false,
       loading: false,
     }
     
     
     export const qualityAssuranceReducer =  (state = INIT_STATE, action) => {
       const { type, payload } = action;
       switch (type) {      
    
       
      case GET_QUALITY_ASSURANCE_LIST: 
           return { ...state,  loading: true};
         
         
       case GET_QUALITY_ASSURANCE_LIST_SUCCESS:
         return { ...state,  qualityAssuranceList: payload, loading: false} 
         
         
       case GET_QUALITY_ASSURANCE_LIST_FAILED: 
           return { ...state,  error: payload, loading: false}
           
       case GET_SINGLE_QUALITY_ASSURANCE: 
           return { ...state,  loading: true};
         
         
       case GET_SINGLE_QUALITY_ASSURANCE_SUCCESS:
         return { ...state,  qualityAssurance: payload, loading: false} 
         
         
       case GET_SINGLE_QUALITY_ASSURANCE_FAILED: 
           return { ...state,  error: payload, loading: false}
       
        case CLOSE_QUALITY_ASSURANCE: 
        return { ...state,  loading: true};
      
      
       case CLOSE_QUALITY_ASSURANCE_SUCCESS :
         return { ...state,  qualityAssurance: payload, loading: false} 
         
         
       case CLOSE_QUALITY_ASSURANCE_FAILED: 
            return { ...state,  error: payload, loading: false}
          
       case DELETE_QUALITY_ASSURANCE_SUCCESS:
             return { ...state,  qualityAssurance: payload, loading: false} 
             
             
       case DELETE_QUALITY_ASSURANCE_FAILED: 
              return { ...state,  error: payload, loading: false}
          
         
         default: {
           return state
         }
       }
     }
     