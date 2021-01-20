const fs = require("fs")

// reads the file synchronously and blocks the runtime
const file = fs.readFileSync("file.txt")
console.log("Sync result --> " + file.toString())

// reads the file asynchronously
fs.readFile("file.txt", function (err, data) {
    if (err) throw err
    console.log("Async result --> " + Buffer.from(data).toString()) // or data.toString()
})