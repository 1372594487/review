// 执行栈，消息队列，任务队列。
// setTimeout、setInterval、fetch中的回调会放到消息队列中，在执行栈、任务队列为空时执行。
// Promise、async await的回调放到任务队列中，执行栈为空时执行。
// 同步任务优先执行于执行栈中。