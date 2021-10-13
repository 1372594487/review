---
title: accumulate
tags: math,array,intermediate
firstSeen: 2020-05-04T12:20:46+03:00
lastUpdated: 2020-11-03T21:46:13+02:00
---

Creates an array of partial sums.

<!-- 创建部分和的数组 -->

- Use `Array.prototype.reduce()`, initialized with an empty array accumulator to iterate over `nums`.
  <!-- 使用空数组累加器初始化以在'nums'上迭代。 -->

- Use `Array.prototype.slice(-1)`, the spread operator (`...`) and the unary `+` operator to add each value to the accumulator array containing the previous sums.
<!-- 扩展运算符（`…`）和一元`+`运算符，用于将每个值添加到包含先前总和的累加器数组中。 -->

```js
const accumulate = (...nums) =>
  nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], [])
```

```js
accumulate(1, 2, 3, 4) // [1, 3, 6, 10]
accumulate(...[1, 2, 3, 4]) // [1, 3, 6, 10]
```

 <!--
  Array.prototype.reduce()
  reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
  -->
