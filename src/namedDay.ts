const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const namedDay = (inputDate: Date, today = new Date(Date.now())): string =>
  specialDay(inputDate, today) ?? DAYS[inputDate.getDay()]

function specialDay(inDate: Date, today: Date) {
  try {
    if (inDate.getMonth() === today.getMonth() && inDate.getFullYear() === today.getFullYear()) {
      if (inDate.getDate() === today.getDate()) return 'Today'
      if (inDate.getDate() === today.getDate() - 1) return 'Yesterday'
      if (inDate.getDate() === today.getDate() + 1) return 'Tomorrow'
    }

    return null
  } catch (e) {
    console.error(e)
    return null
  }
}

export { namedDay }
