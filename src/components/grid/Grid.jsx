import React from 'react';
import Labels from './Labels'
import CurrentTask from './CurrentTask'
import PreviousTasks from './PreviousTasks'

const Grid = () => {
  return (
    <>
      <Labels />
      <CurrentTask />
      <PreviousTasks />
    </>
  )
}

export default Grid