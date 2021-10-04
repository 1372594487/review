function throttle(fn, interval) {
    fn.apply(this, arguments)
    let begin = 0;
    return () => {
        let cur = new Date().getTime();
        if (cur - begin >= interval) {
            fn.apply(this, arguments)
            begin = cur
        }
    }
}

function throttleII(fn, interval) {
	let timer = null
	return function (...args) {
		if (timer) return
		timer = setTimeout(() => {
			timer = null
			fn.apply(this, args)
		}, (interval +'')| 0 || 1000 / 60)
	}
}
