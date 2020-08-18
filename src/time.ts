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

  if (options.milliseconds) {
    data.milliseconds = Math.floor((seconds % 1) * 1000)
  }

  if (options.txt) {
    data.txt = hours
      ? `${data.hours} hour ${data.minutes} min ${data.seconds} sec`
      : `${data.minutes} min ${data.seconds} sec`
  }

  return data
}

export { hoursToMinSec }
