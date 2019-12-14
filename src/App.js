import React from 'react';
import './App.css';

import Task from './components/Task'
import Grid from './components/grid/Grid'

function App() {
  return (
    <div className="App">
      <h1>Task Timer</h1>
      <Task />
      <Grid />
    </div>
  );
}

export default App;
