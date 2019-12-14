import React from 'react';
import './App.css';

import Clock from './components/Clock'
import Grid from './components/grid/Grid'

function App() {
  return (
    <div className="App">
      <h1>Task Timer</h1>
      <Clock />
      <Grid />
    </div>
  );
}

export default App;
