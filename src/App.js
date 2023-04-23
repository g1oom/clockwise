<<<<<<< HEAD
import React from 'react';
import Map from './Map';
=======
import './App.css';
import Login from "./components/Login";
import Registration from "./components/Registration";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
>>>>>>> e3c1fb4efbf4d6a1976b63e3d510971b57d17e4e

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Map />
=======
      <Router>
        <Routes>
          <Route path="/" element = {<Login/>} />
          <Route path="/register" element = {<Registration/>} />
        </Routes>
     </Router>
>>>>>>> e3c1fb4efbf4d6a1976b63e3d510971b57d17e4e
    </div>
  );
}

export default App;
