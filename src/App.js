import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.jsx";
import Main from "./components/main.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Main/>
      </Router>
    </div>
  );
}

export default App;
