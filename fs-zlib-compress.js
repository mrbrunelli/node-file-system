const fs = require("fs")
const zlib = require("zlib")

fs.createReadStream("file.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("file.txt.gz"))

console.log("file.txt has been compressed!")