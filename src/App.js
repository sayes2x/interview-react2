import React, { useState } from 'react';
import './App.css';

import Task from './components/Task'
import Grid from './components/Grid'
import useHeartbeat from './utils/heartbeat'
import formatTime from './utils/formatTime';

function App() {
  const [currentTask, setCurrentTask] = useState({})
  const [previousTasks, setPreviousTasks] = useState([])
  const [timerOn, setTimerOn] = useState(false)

  const timer = () => {
    setCurrentTask({
      ...currentTask,
      duration: currentTask.duration + 1
    })
  }

  useHeartbeat(timer, 1000, timerOn)

  const newTask = (task) => {
    setCurrentTask({
      startTime: new Date().toLocaleTimeString('en-US'),
      duration: 0,
      description: task
    })
    setTimerOn(true)
  }

  const endTask = () => {
    setPreviousTasks([ {
      ...currentTask,
      endTime: new Date().toLocaleTimeString('en-US'),
      duration: formatTime(currentTask.duration)
    }, ...previousTasks])
    setTimerOn(false)
    setCurrentTask({})
  }

  return (
    <div className="App">
      <h1>Task Timer</h1>
      <Task newTask={newTask} endTask={endTask} />
      <Grid currentTask={currentTask} previousTasks={previousTasks} />
    </div>
  );
}

export default App;
