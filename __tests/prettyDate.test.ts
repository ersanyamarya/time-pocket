import { datePrettify, timePrettify } from '../src/prettyDate'

const today = new Date('2021-05-29T12:51:32.776Z')
const dataToTestForPrettyDate = [
  {
    arg0: today,
    arg1: { pretty: true },
    expect: {
      date: 29,
      month: 'May',
      year: 2021,
      day: 'Saturday',
      pretty: '29-May-2021, Saturday',
    },
  },
  {
    arg0: today,
    arg1: { pretty: true, format: 'DD MM YY' },
    expect: {
      date: 29,
      month: 'May',
      year: 2021,
      day: 'Saturday',
      pretty: '29 May 2021',
    },
  },
  {
    arg0: today,
    arg1: { pretty: true, format: 'DD mM YY' },
    expect: {
      date: 29,
      month: 'May',
      year: 2021,
      day: 'Saturday',
      pretty: '29 05 2021',
    },
  },
  {
    arg0: today,
    arg1: { pretty: false },
    expect: { date: 29, month: 'May', year: 2021, day: 'Saturday' },
  },
]
describe('Testing datePrettify functions', () => {
  dataToTestForPrettyDate.forEach(data => {
    test(`it should return prettified ${data.arg0}`, () => {
      expect(datePrettify(data.arg0, data.arg1)).toStrictEqual(data.expect)
    })
  })
})

const dataToTestForPrettyTime = [
  {
    arg0: today,
    arg1: { pretty: false },
    expect: { hour: 14, min: 51, sec: 32 },
  },
  {
    arg0: today,
    arg1: { pretty: true },
    expect: { hour: 14, min: 51, sec: 32, pretty: '14:51:32' },
  },
  {
    arg0: today,
    arg1: { pretty: true, twelveHour: true },
    expect: { hour: 2, min: 51, sec: 32, pretty: '2:51:32 PM' },
  },
]
describe('Testing timePrettify functions', () => {
  dataToTestForPrettyTime.forEach(data => {
    test(`it should return prettified ${data.arg0}`, () => {
      expect(timePrettify(data.arg0, data.arg1)).toStrictEqual(data.expect)
    })
  })
})
