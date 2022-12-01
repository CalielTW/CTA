import React from "react";
import './App.css';
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FlexGrid from "./pages/flexGrid";
import PokemonDetail from "./pages/PokemonDetail";


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/flex-Grid" element={<FlexGrid/>}/>
          <Route exact path="/pokemon/:name" element={<PokemonDetail/>}/>
          {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
