const fs = require("fs")

let text = "Any text..."

const readerStream = fs.createReadStream("file.txt")

readerStream.setEncoding("UTF8")

// stream events -> data, end, error
readerStream.on("data", function (chunk) {
    text += chunk
})

readerStream.on("end", function () {
    console.log("ReadStream --> " + text)
})

readerStream.on("error", function (err) {
    console.log(err.stack)
})