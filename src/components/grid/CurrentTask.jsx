import React from 'react';

import CurrentTaskStyle from './CurrentTask.module.css'

const CurrentTask = () => {
  return (
     <div className={CurrentTaskStyle.row}>
      <p>Start Time</p>
      <p>End Time</p>
      <p>Duration</p>
      <p>Description</p>
    </div>
  )
}

export default CurrentTask