import React, { useEffect,useState}  from 'react'
import axios from 'axios'
import { Container } from '@mui/system';
import MovesDetailed from '../../components/MovesDetailed'
import { useParams } from 'react-router-dom'

const Index = () => {
  const { name } = useParams();
useEffect(() => {getMoveset();}, [])
const [moveset, setMoveset] = useState([]);

const getMoveset = async () => {
    let moveset = await axios.get(`https://pokeapi.co/api/v2/move/${name}`) 
    if (moveset?.data) setMoveset(moveset.data)
  }
  return (
    <Container>
      <MovesDetailed {...{moveset}}/>
    </Container>
  );
}

export default Index