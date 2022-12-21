import React from "react";
import './App.css';
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FlexGrid from "./pages/flexGrid";
import PokemonDetail from "./pages/PokemonDetail";
import PokemonTeam from "./pages/PokemonTeam";
import PokemonMoves from "./pages/PokemonMoves";
import PokemonState from "./contexts/pokemon/PokemonState";
import Navbar from "./components/layout/Navbar";
import { SnackbarProvider } from 'notistack';


function App() {
  return (
    <SnackbarProvider maxSnack={3}>
    <PokemonState>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/flex-Grid" element={<FlexGrid />} />
          <Route exact path="/pokemon/:name" element={<PokemonDetail />} />
          <Route exact path="/pokemon/move/:name" element={<PokemonMoves />} />
          <Route exact path="/team" element={<PokemonTeam/>}/>
        </Routes>
      </Router>
    </PokemonState>
    </SnackbarProvider>
  );
}

export default App;
