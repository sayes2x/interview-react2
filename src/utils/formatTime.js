const formatTime = (time) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time / 60) % 60)
  const seconds =time % 60;
  
  if (hours === 0 && minutes === 0) {
    return `${seconds}`
  } else if (hours === 0) {
    return `${minutes}:${seconds > 9 ? seconds : `0${seconds}`}`
  } else {
    return `${hours}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`
  }
}

export default formatTime