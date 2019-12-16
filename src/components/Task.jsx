import React, { useReducer, useEffect, useRef } from 'react';
import './Task.css'

const initialState = {
  task: '',
  buttonText: 'Start Task',
  taskInputDisabled: false,
  taskButtonDisabled: true
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_TASK':
      return { ...state, task: action.task}
    case 'DISABLE_BUTTON':
      return { ...state, taskButtonDisabled: true }
    case 'ENABLE_BUTTON':
       return { ...state, taskButtonDisabled: false }
    case 'DISABLE_INPUT':
      return { ...state, taskInputDisabled: true }
    case 'ENABLE_INPUT':
      return { ...state, taskInputDisabled: false }
    case 'SET_BUTTON_TEXT':
      return { ...state, buttonText: action.buttonText}
    default:
      return state
  }
}

const Task = ({ newTask, endTask }) => {
  const [taskState, dispatch] = useReducer(reducer, initialState)
  const inputRef = useRef(null)

  useEffect(() => {
    // input will have focus whenever it is empty
    !taskState.task && inputRef.current.focus()
  }, [taskState.task])

  const handleInput = (e) => {
    const value = e.target.value
    // button will only be enabled when input is not empty
    dispatch({ type: value ? 'ENABLE_BUTTON' : 'DISABLE_BUTTON' })
    dispatch({ type: 'UPDATE_TASK', task: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (taskState.buttonText === 'Start Task') {
      newTask(taskState.task)
      dispatch({ type: 'DISABLE_INPUT' })
      dispatch({ type: 'SET_BUTTON_TEXT', buttonText: 'End Task' })
    } else { // if buttonText === 'End Task'
      endTask()
      dispatch({ type: 'SET_BUTTON_TEXT', buttonText: 'Start Task' })
      dispatch({ type: 'DISABLE_BUTTON' })
      dispatch({ type: 'ENABLE_INPUT' })
      dispatch({ type: 'UPDATE_TASK', task: '' })
      inputRef.current.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder='Enter your task'
        task={taskState.task}
        disabled={taskState.taskInputDisabled}
        onChange={handleInput}
      />
      <button
        type='submit'
        disabled={taskState.taskButtonDisabled} >
          {taskState.buttonText}
      </button>
    </form>
  )
}

export default Task