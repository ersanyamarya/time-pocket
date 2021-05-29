const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
interface IDatePrettify {
  pretty?: boolean
}
interface ITimePrettify {
  pretty?: boolean
  twelveHour?: boolean
}
interface IPrettyDate {
  date?: number
  month?: string
  year?: number
  day?: string
  pretty?: string
}
interface IPrettyTime {
  hour: number
  min: number
  sec: number
  pretty?: string
  time?: number
}

function datePrettify(inputDate: Date, options: IDatePrettify = { pretty: true }): IPrettyDate {
  const data: IPrettyDate = {
    date: inputDate.getDate(),
    month: MONTHS[inputDate.getMonth()],
    year: inputDate.getFullYear(),
    day: DAYS[inputDate.getDay()],
  }

  if (options.pretty) data.pretty = `${data.date}-${data.month}-${data.year}, ${data.day}`

  return data
}

function timePrettify(inputDate: Date, options: ITimePrettify = { pretty: true, twelveHour: false }): IPrettyTime {
  const data: IPrettyTime = {
    hour: options.twelveHour ? inputDate.getHours() - 12 : inputDate.getHours(),
    min: inputDate.getMinutes(),
    sec: inputDate.getSeconds(),
  }
  if (options.pretty)
    data.pretty = options.twelveHour
      ? `${data.hour > 12 ? data.hour - 12 : data.hour}:${data.min}:${data.sec} ${data.hour > 12 ? 'PM' : 'AM'}`
      : `${data.hour}:${data.min}:${data.sec}`

  return data
}
export { datePrettify, timePrettify }
