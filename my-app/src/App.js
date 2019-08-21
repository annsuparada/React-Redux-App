import React from 'react';
import PlayerList from './components/PlayerList'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="basketball"></div>
        <h1>NBA Players</h1>
      </header>
      <div className="container">
      <PlayerList />
      </div>
      
    </div>
  );
}

export default App;
