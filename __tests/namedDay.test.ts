import { namedDay } from '../src/index'
const today = new Date('2021-05-29T14:51:32.776Z')
const wrongDate = new Date('2021-13-29T14:51:32.776Z')
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)

const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const randomDate = new Date(today)
randomDate.setDate(randomDate.getDate() + 12)

const dataToTest = [
  { arg0: today, arg1: today, expect: 'Today' },
  { arg0: wrongDate, arg1: today, expect: undefined },
  { arg0: yesterday, arg1: today, expect: 'Yesterday' },
  { arg0: tomorrow, arg1: today, expect: 'Tomorrow' },
  { arg0: randomDate, arg1: today, expect: 'Thursday' },
]
describe('Testing time functions', () => {
  dataToTest.forEach(data => {
    test(`it should return correct day name for ${data.arg0}`, () => {
      expect(namedDay(data.arg0, data.arg1)).toStrictEqual(data.expect)
    })
  })
})
