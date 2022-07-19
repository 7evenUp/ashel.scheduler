const dayToStr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

export const useDate = () => {
  const currentDate = new Date()
  let weekDayNum = currentDate.getDay()
  let day = currentDate.getDate()
  let month = currentDate.getMonth() + 1

  const formatedDay = day < 10 ? `0${day}` : day
  const formatedMonth = month < 10 ? `0${month}` : month
  const weekDayString = dayToStr[weekDayNum]

  return `${weekDayString} ${formatedDay}.${formatedMonth}`
}