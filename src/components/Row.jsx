import React from 'react'
import './Row.css'

const Row = ({ startTime, endTime, duration, description, selector }) => {
  return (
    <ul className={selector}>
      <li>{startTime}</li>
      <li>{endTime}</li>
      <li>{duration}</li>
      <li>{description}</li>
    </ul>
  )
}

export default Row