import React from 'react';
import Row from './Row'
import MobileRow from './MobileRow'
import formatTime from '../utils/formatTime'
import useGetWidth from '../utils/getWidth'

const Grid = ({ currentTask, previousTasks }) => {

  let width = useGetWidth()
  if (width < 1025) {
    return (
      <>
        {
          Object.entries(currentTask).length === 0 ? null :
        <MobileRow
          startTime={currentTask.startTime}
          endTime={currentTask.endTime}
          duration={formatTime(currentTask.duration)}
          description={currentTask.description}
          selector='mobile-row current-task'
        />
        }
        {
          previousTasks.map ((task, index) => {
            return (
              <MobileRow key={index}
                startTime={task.startTime}
                endTime={task.endTime}
                duration={task.duration}
                description={task.description}
                selector='mobile-row'
              />
            )
          })
        }
      </>
    )
  } else {
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
          })
        }
      </>
    )
  }
}

export default Grid