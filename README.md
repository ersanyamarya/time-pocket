<h1 align="center">

<a href="https://github.com/ersanyamarya/time-pocket"><img src="https://raw.githubusercontent.com/ersanyamarya/time-pocket/master/docs/images/time-pocket-2.svg" alt="Standard -  Time Pocket" width="200"></a> <br> Time Pocket - time utilities <br>

</h1>

<p align="center">
<a href="https://www.codacy.com/manual/ersanyamarya/time-pocket?utm_source=github.com&utm_medium=referral&utm_content=ersanyamarya/time-pocket&utm_campaign=Badge_Grade"> <img src ="https://img.shields.io/codacy/grade/a003dbe0f9a346348a10f4a1836e9499/master?logo=codacy&style=for-the-badge" alt="Codacy Badge"> </a>
<a href="https://github.com/ersanyamarya/time-pocket/actions"> <img src ="https://img.shields.io/github/workflow/status/ersanyamarya/time-pocket/Integrate?label=Integrate&logo=github&style=for-the-badge" alt="Integrate Pipeline Badge"> </a>
<a href="https://github.com/ersanyamarya/time-pocket"><img src ="https://img.shields.io/github/repo-size/ersanyamarya/time-pocket?logo=github&style=for-the-badge" alt="Repo Size Badge"></a>
<a href="LICENSE"> <img src ="https://img.shields.io/github/license/ersanyamarya/time-pocket?style=for-the-badge" alt="LICENSE Badge"> </a>
<a href="https://www.npmjs.com/package/time-pocket"> <img alt="npm" src="https://img.shields.io/npm/v/time-pocket?logo=npm&style=for-the-badge"> </a>
</p>

Some simple time utilities which you can have with you while developing in JS.

🌟 Types Included 🌟

- [How to use](#how-to-use)
  - [Install](#install)
  - [`namedDay()`](#namedday)
    - [Arguments](#arguments)
    - [Examples](#examples)
  - [`datePrettify()`](#dateprettify)
    - [Arguments](#arguments-1)
    - [Options](#options)
    - [Examples](#examples-1)
  - [`timePrettify()`](#timeprettify)
    - [Arguments](#arguments-2)
    - [Options](#options-1)
    - [Examples](#examples-2)
  - [`hoursToMinSec()`](#hourstominsec)
    - [Arguments](#arguments-3)
    - [Options](#options-2)
    - [Examples](#examples-3)

## How to use

### Install

`npm install time-pocket`

</br>

### `namedDay()`

Returns day name if it is today, tomorrow or yesterday, otherwise returns the day of the week.

#### Arguments

| Number | Type | Description      |
| ------ | ---- | ---------------- |
| 0      | Date | Date to prettify |

#### Examples

```ts
import { datePrettify } from 'time-pocket'
const today = new Date(Date.now())

const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)

const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const randomDate = new Date(today)
randomDate.setDate(randomDate.getDate() + 12)

console.log(namedDay(today))
console.log(namedDay(tomorrow))
console.log(namedDay(yesterday))
console.log(namedDay(randomDate))

/*
Today
Tomorrow
Yesterday
Thursday
*/
```

### `datePrettify()`

Returns date in pretty format

#### Arguments

| Number | Type                | Description        |
| ------ | ------------------- | ------------------ |
| 0      | Date                | Date to prettify   |
| 1      | [Options](#options) | Additional options |

#### Options

| Name   | Type    | Default | Description                            |
| ------ | ------- | ------- | -------------------------------------- |
| pretty | boolean | true    | If you also want the prettified string |

#### Examples

```ts
import { datePrettify } from 'time-pocket'
const today = new Date(Date.now())

console.log(datePrettify(today))
/* 
{
  date: 29,
  month: 'May',
  year: 2021,
  day: 'Saturday',
  pretty: '29-May-2021, Saturday'
}
*/
```

### `timePrettify()`

Returns date in pretty format

#### Arguments

| Number | Type                | Description        |
| ------ | ------------------- | ------------------ |
| 0      | Date                | Date to prettify   |
| 1      | [Options](#options) | Additional options |

#### Options

| Name       | Type    | Default | Description                            |
| ---------- | ------- | ------- | -------------------------------------- |
| pretty     | boolean | true    | If you also want the prettified string |
| twelveHour | boolean | false   | If you want the time in 12 hour format |

#### Examples

```ts
import { timePrettify } from 'time-pocket'
const today = new Date(Date.now())

console.log(timePrettify(today))
/* 
{ hour: 19, min: 57, sec: 59, pretty: '19:57:59' }
*/
```

### `hoursToMinSec()`

Convert decimal hours to min and seconds

#### Arguments

| Number | Type                | Description           |
| ------ | ------------------- | --------------------- |
| 0      | number              | Decimal time in hours |
| 1      | [Options](#options) | Additional options    |

#### Options

| Name         | Type    | Default | Description                          |
| ------------ | ------- | ------- | ------------------------------------ |
| milliseconds | boolean | false   | Also return the milliseconds         |
| txt          | boolean | false   | Also return the value in text format |

</br>

#### Examples

```ts
import { hoursToMinSec } from 'time-pocket'

console.log(hoursToMinSec(1.25))
// { hours: 1, minutes: 15, seconds: 0 }

console.log(hoursToMinSec(21.2534))
// { hours: 21, minutes: 15, seconds: 12 }

console.log(hoursToMinSec(0.756))
// { hours: 0, minutes: 45, seconds: 21 }

console.log(hoursToMinSec(1.25, { milliseconds: true, txt: true }))
/* 
{
  hours: 1,
  minutes: 15,
  seconds: 0,
  milliseconds: 0,
  txt: '1 hour 15 min 0 sec'
}
*/

console.log(hoursToMinSec(0.756, { milliseconds: true, txt: true }))

/*
{
  hours: 0,
  minutes: 45,
  seconds: 21,
  txt: '45 min 21 sec 599 millisecond',
  milliseconds: 599,
}
*/
```

</br>

<h2 align="center">
<a href="https://github.com/ersanyamarya">
Author: <img src="https://raw.githubusercontent.com/ersanyamarya/time-pocket/master/docs/images/name-banner.svg" alt="Standard -  Time Pocket" height="20"></a>

</h2>
