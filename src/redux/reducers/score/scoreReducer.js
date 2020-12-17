import {
    GET_SINGLE_SCORE,
    GET_SINGLE_SCORE_SUCCESS,
    GET_SINGLE_SCORE_FAILED,
    EDIT_SCORE,
    EDIT_SCORE_SUCCESS,
    EDIT_SCORE_FAILED
  } from '../../constants/score/index';
  
  const INIT_STATE = {
    score: null,
    error: false,
    loading: false,
  }
  
  
  export const scoreReducer =  (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_SINGLE_SCORE: 
        return { ...state }
      
      
    case GET_SINGLE_SCORE_SUCCESS: 
        return { ...state, score: payload};
      
    
    case GET_SINGLE_SCORE_FAILED:
      return { ...state,   error: payload }
      
      
    case EDIT_SCORE: 
        return { ...state,  loading: true};
   
      
    case EDIT_SCORE_SUCCESS: 
        return { ...state,  score: payload, loading: false}
    
     case EDIT_SCORE_FAILED: 
     return { ...state, error: payload,  loading: true};

      default: {
        return state
      }
    }
  }
  