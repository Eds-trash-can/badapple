console.log("file", process.argv[2])

const badapple = require("./"+ process.argv[2])

const iv = setInterval(_ => {
	const frame = badapple.frames.shift()

	if (frame) {
		console.clear()
		console.log(frame)
	} else
		clearInterval(iv)
	
}, 1000 / badapple.fps)
