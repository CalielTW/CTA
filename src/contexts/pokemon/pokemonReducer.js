import {
    SET_ERROR,
    SET_LOADING,
    CLEAR_STATE,
    GET_POKEMON,
    GET_TEAM,
    DELETE_POKEMON
  } from '../types';

  
  export default (state, action) => {
    console.log(action)
    switch (action.type) {
        case GET_POKEMON:
        return {
          ...state,
          pokemon: action.payload,
          loading: false,
          error: null
        };
        case GET_TEAM:
          return {
            ...state,
            team: [...state.team,action.payload],
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
        case DELETE_POKEMON:
          return {
          ...state,
          loading: false,
          error: null,
          team: [...state.team.filter((pokemon,index)=>index!==action.payload)]
}
      default:
        return state;
    }
  };