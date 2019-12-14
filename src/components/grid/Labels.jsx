import React from 'react';
import labelsStyle from './Labels.module.css'

const Labels = () => {
  return (
    <div className={labelsStyle.row}>
      <h2>Start Time</h2>
      <h2>End Time</h2>
      <h2>Duration</h2>
      <h2>Description</h2>
    </div>
  )
}

export default Labels