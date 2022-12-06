import {
  GET_USER,
  SET_ERROR,
  SET_LOADING,
  CLEAR_STATE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
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
        user: {},
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
