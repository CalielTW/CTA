import {
    SET_ERROR,
    SET_LOADING,
    CLEAR_STATE,
    GET_POKEMON,
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
        case GET_POKEMON:
        return {
          ...state,
          pokemon: action.payload,
          loading: false,
          error: null
        };
      case SET_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false
        }
      case CLEAR_STATE:
        return {
          pokemon:{},
          loading: false,
          error: null
        }
      case SET_LOADING:
        return {
          ...state,
          loading: true
        }
      default:
        return state;
    }
  };