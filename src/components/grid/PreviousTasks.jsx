import React from 'react';

import PreviousTasksStyle from './PreviousTasks.module.css'

const PreviousTasks = () => {
  return (
    <div className={PreviousTasksStyle.row}>
      <p>Start Time</p>
      <p>End Time</p>
      <p>Duration</p>
      <p>Description</p>
    </div>
  )
}

export default PreviousTasks