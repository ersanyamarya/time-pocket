const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const namedDay = (inputDate: Date): string => specialDay(inputDate) ?? DAYS[inputDate.getDay()]

function specialDay(inDate: Date) {
  const today = new Date(Date.now())

  if (inDate.getMonth() === today.getMonth() && inDate.getFullYear() === today.getFullYear()) {
    if (inDate.getDate() === today.getDate()) return 'Today'
    if (inDate.getDate() === today.getDate() - 1) return 'Yesterday'
    if (inDate.getDate() === today.getDate() + 1) return 'Tomorrow'
  }

  return null
}

export { namedDay }
