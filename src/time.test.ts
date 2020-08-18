import { hoursToMinSec } from './index'

const dataToTest = [
  { arg0: 1.25, arg1: {}, expect: { hours: 1, minutes: 15, seconds: 0 } },
  { arg0: 21.2534, arg1: {}, expect: { hours: 21, minutes: 15, seconds: 12 } },
  { arg0: 0.756, arg1: {}, expect: { hours: 0, minutes: 45, seconds: 21 } },
  {
    arg0: 1.25,
    arg1: { milliseconds: true, txt: true },
    expect: {
      hours: 1,
      minutes: 15,
      seconds: 0,
      milliseconds: 0,
      txt: '1 hour 15 min 0 sec',
    },
  },
  {
    arg0: 0.756,
    arg1: { milliseconds: true, txt: true },
    expect: {
      hours: 0,
      minutes: 45,
      seconds: 21,
      milliseconds: 599,
      txt: '45 min 21 sec',
    },
  },
  {
    arg0: 0.756,
    arg1: { milliseconds: false, txt: false },
    expect: {
      hours: 0,
      minutes: 45,
      seconds: 21,
    },
  },
]
describe('Testing time functions', () => {
  dataToTest.forEach(data => {
    test('it should return correct conversion of decimal hours to min and sec', () => {
      expect(hoursToMinSec(data.arg0, data.arg1)).toStrictEqual(data.expect)
    })
  })
})
