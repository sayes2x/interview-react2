import React, { useReducer, useEffect, useRef } from 'react';

const initialState = {
  task: '',
  buttonText: 'Start Task',
  taskInputDisabled: false,
  timerButtonDisabled: true
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_TASK':
      return { ...state, task: action.task}
    case 'DISABLE_BUTTON':
      return { ...state, timerButtonDisabled: true }
    case 'ENABLE_BUTTON':
       return { ...state, timerButtonDisabled: false }
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

const Clock = () => {
  const [clockState, dispatch] = useReducer(reducer, initialState)
  const inputRef = useRef(null)

  useEffect(() => {
    // input will have focus whenever it is empty
    !clockState.task && inputRef.current.focus()
  }, [clockState.task])

  const handleInput = (e) => {
    const value = e.target.value
    // button will only be enabled when input is not empty
    dispatch({ type: value ? 'ENABLE_BUTTON' : 'DISABLE_BUTTON' })
    dispatch({ type: 'UPDATE_TASK', task: value })
  }

  const handleClick = () => {
    if (clockState.buttonText === 'Start Task') {
      // call function to add task to Current Task and start timer
      dispatch({ type: 'DISABLE_INPUT' })
      dispatch({ type: 'SET_BUTTON_TEXT', buttonText: 'End Task' })
    } else {
      // call function to end timer and add current task to tasks
      dispatch({ type: 'UPDATE_TASK', task: '' })
      inputRef.current.value = ''
      dispatch({ type: 'SET_BUTTON_TEXT', buttonText: 'Start Task' })
      dispatch({ type: 'DISABLE_BUTTON' })
      dispatch({ type: 'ENABLE_INPUT' })
    }

  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder='Enter your task'
        task={clockState.task}
        disabled={clockState.taskInputDisabled}
        onChange={handleInput}
      />
      <button
        type='button'
        disabled={clockState.timerButtonDisabled}
        onClick={handleClick} >
          {clockState.buttonText}
      </button>
    </>
  )
}

export default Clock