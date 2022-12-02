import React, { useEffect,useState}  from 'react'
import axios, { Axios } from 'axios'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/system';
import PokemonDetailed from './../../components/PokemonDetailed'
import PokemonDetailedMoves from './../../components/PokemonDetailedMoves'

const PokemonDetail = () => {
    const {name} = useParams();
    const [newPokemon,setPokemon] = useState([]);
    useEffect(() => {getPokemonName ();},[]);

    useEffect(() => {
    console.log(newPokemon)
    }, [newPokemon])
    

  const getPokemonName = async ()=>
    {
    let newPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if(newPokemon?.data)setPokemon(newPokemon.data)
    }
  return (
    <Container>
      <PokemonDetailed {...{newPokemon}}/>
      <PokemonDetailedMoves {...{newPokemon}}/>
    </Container>
  );
}

export default PokemonDetail