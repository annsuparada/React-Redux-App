import React from 'react';
import PlayerList from './components/PlayerList'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NBA Players</h1>
      </header>
      <PlayerList />
    </div>
  );
}

export default App;
