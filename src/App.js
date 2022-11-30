import React from "react";
import './App.css';
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          {/* <Route exact path="/login" element={<Login/>}/> */}
          {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
