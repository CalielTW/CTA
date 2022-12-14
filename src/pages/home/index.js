import React, { useEffect,useState}  from 'react'
import axios from 'axios'
import PokemonTable from './../../components/PokemonTable'
import { Container } from '@mui/system';
import usePokemon from '../../hooks/usePokemon';

const Index = () => {
  const [pokemons,setPokemons] = useState([]);
useEffect(() => {getPokemons();}, [])
const {pokemon} = usePokemon();
useEffect(() => {
console.log(pokemon)
}, [pokemon])

const getPokemons = async ()=>
{
  let newPokemons = await axios.get(' https://pokeapi.co/api/v2/pokemon/?limit=20')
  if(newPokemons?.data?.results)setPokemons(newPokemons.data.results)
}
  return (
    <Container sx={{backgroundColor:'blue'}}>
      <PokemonTable {...{pokemons}}/>  
    </Container>
  )
}

export default Index

// https://pokeapi.co/api/v2/pokemon/