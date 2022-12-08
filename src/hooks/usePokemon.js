import { useContext } from 'react';
import pokemonContext from '../contexts/pokemon/pokemonContext';

const usePokemon = () => useContext(pokemonContext);

export default usePokemon;