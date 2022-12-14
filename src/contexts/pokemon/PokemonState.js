import React, { useReducer } from 'react';
import pokemonContext from './pokemonContext';
import pokemonReducer from './pokemonReducer';
import axios from 'axios'
import {
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
  GET_POKEMON,
  GET_TEAM
} from '../types';

const PokemonState = props => {
  const initialState = {
    pokemon:{},
    team: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer( pokemonReducer, initialState);

  const clearPokemonState = () => dispatch({ type: CLEAR_STATE });

  const setLoading = () => dispatch({ type: SET_LOADING });
  
    const getPokemon = async name => {
      setLoading();
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        dispatch({
          type: GET_POKEMON,
          payload:res.data
        });
      } catch (err) {
        dispatch({ type: SET_ERROR, payload: err.response.data })
      }
    };

const getTeam = (pokemon,arregloMovesets) => {
  setLoading();
  try{
    console.log(1,arregloMovesets)
    if (arregloMovesets.length <1)return /*Please add more moves*/ ;
    console.log(2)

  dispatch({
    type: GET_TEAM,
    payload: pokemon
  });
  } catch (err) {}
}

  return (
    <pokemonContext.Provider
      value={{
        loading: state.loading,
        pokemon:state.pokemon,
        team: state.team,
        error: state.error,
        getTeam,
        getPokemon,
        clearPokemonState,
        setLoading,
      }}
    >
      {props.children}
    </pokemonContext.Provider>
  );
};

export default PokemonState;
