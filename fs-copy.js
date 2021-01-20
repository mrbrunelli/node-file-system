const fs = require("fs")

fs.copyFile("file.txt", "file-copy.txt", function (err) {
    if (err) throw err
    console.log("file.txt as been copied!")
})