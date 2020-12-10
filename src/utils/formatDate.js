export const formatDate = (date = new Date()) => {
  return `${date.getFullYear()
    .toString().padStart(2,0)}-${date.getMonth()
    .toString().padStart(2,0)}-${date.getDate()
    .toString().padStart(2,0)}`
}

export const formatTime = (time = new Date()) => {
  return `${time.getHours().toString().padStart(2,0)}:${time.getMinutes().toString().padStart(2,0)}`
} 