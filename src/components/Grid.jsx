import React from 'react';
import Row from './Row'
import formatTime from '../utils/formatTime'

const Grid = ({ currentTask, previousTasks }) => {
  return (
    <>
      <Row
        startTime='Start Time'
        endTime='End Time'
        duration='Duration'
        description='Description'
        selector='row label'
      />
      {
        Object.entries(currentTask).length === 0 ? null :
      <Row
        startTime={currentTask.startTime}
        endTime={currentTask.endTime}
        duration={formatTime(currentTask.duration)}
        description={currentTask.description}
        selector='row current-task'
      />
      }
      {
        previousTasks.map ((task, index) => {
          return (
            <Row key={index}
              startTime={task.startTime}
              endTime={task.endTime}
              duration={task.duration}
              description={task.description}
              selector='row'
            />
          )
        }
        )
      }
    </>
  )
}

export default Grid