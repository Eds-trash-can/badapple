const fs = require("fs")

if( process.argv.length < 5) {
	console.log("bad arguments!")
	console.log("Usage: node script.js <pathto.json> <echo or wall> <outfile>")
}

console.log("file", process.argv[2])

const video = require("./"+ process.argv[2])

let file = ""

let done = false
while( !done ) {
	const frame = video.frames.shift()

	if (frame) {
		file += `sleep ${1 / video.fps }\n`
		file += `${process.argv[3]} "\n\n\n\n\n${frame}"\n`
	} else
		done = true
}


fs.writeFileSync(process.argv[4], file)
