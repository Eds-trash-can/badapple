const fs = require("fs").promises
const seurat = require("seurat")
const ffmpegExtractFrames = require("ffmpeg-extract-frames")
const imageSize = require("image-size")

const limit = 2000

const ifile = process.argv[2]
const fps = Number(process.argv[3])
const th = Number(process.argv[4])
const ofile = process.argv[5]

console.log("if", ifile)
console.log("fps", fps)
console.log("threashhold", th)
console.log("outfile", ofile)

fs.rm("frames", {recursive: true, force: true})
	.then(_ => fs.mkdir("frames"))
	.then(_ => ffmpegExtractFrames({
		input: ifile,
		output: "frames/%5d.png",
		fps
	}))
	.then(_ => fs.readdir("frames"))
	.then(files => {
		const dimensions = imageSize("frames/00001.png")
		const ratio = dimensions.width / dimensions.height
		const size = Math.sqrt(limit)
			
		return Promise.all(files.map(file =>
			seurat.convert("frames/" + file, {
				width:  Math.floor(size * ratio),
				height: Math.floor(size / ratio),
				threshold: th,
			})))
	})
	.then(frames => fs.writeFile(ofile, JSON.stringify({fps, frames})))
