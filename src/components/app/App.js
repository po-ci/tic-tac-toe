import React from 'react';
import logo from './../../logo.svg';
import './App.css';

import Board from './../board'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        First Proyect
        </p>
        TIC TAC TOE
      </header>

       <Board />
    </div>
  );
}

export default App;
