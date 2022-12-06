import React from "react";
import './App.css';
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FlexGrid from "./pages/flexGrid";
import PokemonDetail from "./pages/PokemonDetail";
import PokemonMoves from "./pages/PokemonMoves";
import UserState from "./contexts/user/UserState";


function App() {
  return (
    <UserState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/flex-Grid" element={<FlexGrid />} />
          <Route exact path="/pokemon/:name" element={<PokemonDetail />} />
          <Route exact path="/pokemon/move/:name" element={<PokemonMoves />} />
          {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Router>
    </UserState>
  );
}

export default App;
