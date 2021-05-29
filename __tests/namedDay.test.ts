import { namedDay } from '../src/index'
const today = new Date('2021-05-29T14:51:32.776Z')
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)

const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const randomDate = new Date(today)
randomDate.setDate(randomDate.getDate() + 12)

const dataToTest = [
  { arg0: today, arg1: {}, expect: 'Today' },
  { arg0: yesterday, arg1: {}, expect: 'Yesterday' },
  { arg0: tomorrow, arg1: {}, expect: 'Tomorrow' },
  { arg0: randomDate, arg1: {}, expect: 'Thursday' },
]
describe('Testing time functions', () => {
  dataToTest.forEach(data => {
    test(`it should return correct day name for ${data.arg0}`, () => {
      expect(namedDay(data.arg0)).toStrictEqual(data.expect)
    })
  })
})
