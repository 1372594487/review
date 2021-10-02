// 获取浏览器Cookie值
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

// RGB转16进制
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// console.log(rgbToHex(0,51,255));
// #0033ff

// 复制到剪贴板
/* 规范要求在写入剪贴板之前使用 Permission API 获取 "剪贴板写入" 权限。不同浏览器要求不同 */
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
// copyToClipboard('hello world')

// 检查日期是否合法
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf())
// console.log(isDateValid("December 17,1995 03:24:00"));
// true

// 查找日期位于一年中的第几天
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// console.log(dayOfYear(new Date()));
//

// 英文字符串首字母大写
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
// console.log(capitalize('follow for more'));

//计算两个日期之间相差多少天
const dayOf = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
// dayOf(new Date('2020-10-21'),new Date('2021-10-22'))

// 清除全部Cookie
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))

// 生成随机十六进制颜色
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
// console.log(randomHex());

// 数组去重
const removeDuplicates = arr => [...new Set(arr)]
// const removeDuplicates = arr => Array.from(new Set(arr))
// console.log(removeDuplicates([1,2,2,3,4,5,6,10,100]));

// 数组合并去重
function combine() {
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组
    return Array.from(new Set(arr));
}
// var m = [1, 2, 2], n = [2,3,3];
// console.log(combine(m,n));                  
// [1, 2, 3]

//从URL获取查询参数
const getParameters = url => Object.fromEntries(new URLSearchParams(window.location.search))

// 时间处理
const timeFromDate = date => date.toTimeString().slice(0,8)
// console.log(timeFromDate(new Date(2021,0,10,17,30,0)));
// 17:30:00