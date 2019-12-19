import React from 'react'
import './MobileRow.css'

const MobileRow = ({ startTime, endTime, duration, description, selector }) => {
  return (
    <ul className={selector}>
      <li className='start-time'>
        <h3 className='mobile-label'>Start Time</h3>
        <p>
          {startTime}
        </p>
      </li>
      <li className='end-time'>
        <h3 className='mobile-label'>End Time</h3>
        <p>
          {endTime}
        </p>
      </li>
      <li className='duration'>
        <h3 className='mobile-label'>Duration</h3>
        <p>
          {duration}
        </p>
      </li>
      <li className='description'>
        <h3 className='mobile-label'>Description</h3>
        <p>
          {description}
        </p>
      </li>
    </ul>
  )
}

export default MobileRow