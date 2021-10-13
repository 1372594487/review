---
title: addDaysToDate
tags: date,intermediate
firstSeen: 2020-10-12T03:03:18+03:00
lastUpdated: 2020-11-28T19:18:29+02:00
---

Calculates the date of `n` days from the given date, returning its string representation.

- Use `new Date()` to create a date object from the first argument.
- Use `Date.prototype.getDate()` and `Date.prototype.setDate()` to add `n` days to the given date.
- Use `Date.prototype.toISOString()` to return a string in `yyyy-mm-dd` format.

```js
const addDaysToDate = (date, n) => {
  const d = new Date(date)
  d.setDate(d.getDate() + n)
  return d.toISOString().split('T')[0]
}
```

```js
addDaysToDate('2020-10-15', 10) // '2020-10-25'
addDaysToDate('2020-10-15', -10) // '2020-10-05'
```

<!--
toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识。
 -->
