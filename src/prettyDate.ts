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
  format?: 'DD:MM:YY' | 'DD MM YY' | 'DD MM YY DY' | 'DD-MM-YY' | string
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

function datePrettify(inputDate: Date, options: IDatePrettify = { pretty: true }): IPrettyDate | string {
  try {
    const data: IPrettyDate = {
      date: inputDate.getDate(),
      month: MONTHS[inputDate.getMonth()],
      year: inputDate.getFullYear(),
      day: DAYS[inputDate.getDay()],
    }

    if (options.pretty)
      data.pretty = options.format
        ? getFormattedDate(inputDate, options.format, data)
        : `${data.date}-${data.month}-${data.year}, ${data.day}`

    return data
  } catch (e) {
    console.error(e)
    return null
  }
}

const getFormattedDate = (inputDate: Date, format: string, { date, month, year, day }: IPrettyDate): string =>
  format
    .replace('DD', `${date}`)
    .replace('MM', month)
    .replace('mm', month.substring(0, 3))
    .replace('mM', getMonthNumber(inputDate))
    .replace('YY', `${year}`)
    .replace('DY', day)
    .replace('dy', day.substring(0, 3))

const getMonthNumber = (inputDate: Date): string => {
  const month = inputDate.getMonth() + 1
  return month < 10 ? `0${month}` : `${month}`
}
function timePrettify(
  inputDate: Date,
  options: ITimePrettify = { pretty: true, twelveHour: false }
): IPrettyTime | string {
  try {
    const data: IPrettyTime = {
      hour: options.twelveHour
        ? inputDate.getHours() > 12
          ? inputDate.getHours() - 12
          : inputDate.getHours()
        : inputDate.getHours(),
      min: inputDate.getMinutes(),
      sec: inputDate.getSeconds(),
    }
    if (options.pretty)
      data.pretty = options.twelveHour
        ? `${data.hour}:${data.min}:${data.sec} ${inputDate.getHours() > 12 ? 'PM' : 'AM'}`
        : `${data.hour}:${data.min}:${data.sec}`

    return data
  } catch (e) {
    console.error(e)
    return null
  }
}
export { datePrettify, timePrettify }
