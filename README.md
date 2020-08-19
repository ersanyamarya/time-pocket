<h1 align="center">

<a href="https://github.com/ersanyamarya/time-pocket"><img src="https://raw.githubusercontent.com/ersanyamarya/time-pocket/master/docs/images/time-pocket-2.svg" alt="Standard -  Time Pocket" width="200"></a> 
<br> Time Pocket - time utilities <br>

</h1>

<p align="center">
<a href="https://www.codacy.com/manual/ersanyamarya/time-pocket?utm_source=github.com&utm_medium=referral&utm_content=ersanyamarya/time-pocket&utm_campaign=Badge_Grade"> <img src ="https://img.shields.io/codacy/grade/a003dbe0f9a346348a10f4a1836e9499/master?logo=codacy&style=for-the-badge" alt="Codacy Badge"> </a>
<a href="https://github.com/ersanyamarya/time-pocket/actions"> <img src ="https://img.shields.io/github/workflow/status/ersanyamarya/time-pocket/Integrate?label=Integrate&logo=github&style=for-the-badge" alt="Integrate Pipeline Badge"> </a>
<a href="https://github.com/ersanyamarya/time-pocket"><img src ="https://img.shields.io/github/repo-size/ersanyamarya/time-pocket?logo=github&style=for-the-badge" alt="Repo Size Badge"></a>
<a href="LICENSE"> <img src ="https://img.shields.io/github/license/ersanyamarya/time-pocket?style=for-the-badge" alt="LICENSE Badge"> </a>
<a href="#"> <img alt="npm" src="https://img.shields.io/npm/v/time-pocket?logo=npm&style=for-the-badge"> </a>
</p>

Some simple time utilities which you can have with you while developing in JS.

🌟 Types Included 🌟

## How to use

### Install

`npm install time-pocket`

</br>

### Convert decimal hours to min and seconds - `hoursToMinSec()`

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

#### Examples:

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
