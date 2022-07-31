const dayToStr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']


/**
 * @returns {string} Returns string like 'Sunday 31.07'
 */
export const useDate = (): string => {
  const currentDate = new Date()
  let weekDayNum = currentDate.getDay()
  let day = currentDate.getDate()
  let month = currentDate.getMonth() + 1

  const formatedDay = day < 10 ? `0${day}` : day
  const formatedMonth = month < 10 ? `0${month}` : month
  const weekDayString = dayToStr[weekDayNum]

  return `${weekDayString} ${formatedDay}.${formatedMonth}`
}