const fs = require("fs")
const {promisify} = require("util")

const readFilePromise = promisify(fs.readFile)

readFilePromise("file.txt")
    .then(txt => console.log("file.txt has been read with promisify --> " + txt.toString()))
    .catch(err => console.log(err.stack))
