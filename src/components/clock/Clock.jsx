import React from 'react';

import TaskInput from './TaskInput'
import TimerButton from './TimerButton'

const Clock = () => {
  return (
    <>
      <TaskInput placeholder='Enter your task' />
      <TimerButton label='start'/>
    </>
  )
}

export default Clock