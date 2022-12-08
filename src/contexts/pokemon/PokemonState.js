import React, { useReducer } from 'react';
import pokemonContext from './pokemonContext';
import pokemonReducer from './pokemonReducer';
import axios from 'axios'
import {
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING,
  GET_POKEMON
} from '../types';

const PokemonState = props => {
  const initialState = {
    pokemon:{},
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

  return (
    <pokemonContext.Provider
      value={{
        loading: state.loading,
        pokemon:state.pokemon,
        error: state.error,
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
