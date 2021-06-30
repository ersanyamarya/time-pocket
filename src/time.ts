interface HoursToMinSecResponse {
  hours: number
  minutes: number
  seconds: number
  milliseconds?: number
  txt?: string
}

interface OptionsHMS {
  milliseconds?: boolean
  txt?: boolean
}

const hoursToMinSec = (
  time: number,
  options: OptionsHMS = { milliseconds: false, txt: false }
): HoursToMinSecResponse => {
  const hours = Math.floor(time)
  const minutes = (time - hours) * 60
  const seconds = (minutes % 1) * 60

  const data: HoursToMinSecResponse = {
    hours,
    minutes: Math.floor(minutes),
    seconds: Math.floor(seconds),
  }

  if (options.txt) {
    data.txt = hours
      ? `${data.hours} hour ${data.minutes} min ${data.seconds} sec`
      : `${data.minutes} min ${data.seconds} sec`
  }

  if (options.milliseconds) {
    data.milliseconds = Math.floor((seconds % 1) * 1000)
    if (data.milliseconds) data.txt = `${data.txt} ${data.milliseconds} millisecond`
  }

  return data
}

const timeDifference = (startDate: string | Date, endDate: string | Date, seconds = false): HoursToMinSecResponse => {
  const start: number = typeof startDate === 'string' ? Date.parse(startDate) : startDate.getTime()
  const end: number = typeof endDate === 'string' ? Date.parse(endDate) : endDate.getTime()
  const data = hoursToMinSec((start - end) / (1000 * 60 * 60), { txt: true })
  if (!seconds) data.txt = `${data.txt.split('min')[0]}min`
  return data
}

export { hoursToMinSec, timeDifference }
