import React, { useEffect,useState}  from 'react'
import axios from 'axios'
import PokemonTable from './../../components/PokemonTable'
import { Container } from '@mui/system';


const Index = () => {
  const [pokemons,setPokemons] = useState([]);
useEffect(() => {
 
getPokemons();
}, [])

const getPokemons = async ()=>{
  let newPokemons = await axios.get(' https://pokeapi.co/api/v2/pokemon/?limit=20')
  console.log(newPokemons)
  if(newPokemons?.data?.results)setPokemons(newPokemons.data.results)

}


  return (
    <Container>
      <PokemonTable {...{pokemons}}/>  
    </Container>
  )
}

export default Index

// https://pokeapi.co/api/v2/pokemon/