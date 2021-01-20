const fs = require("fs")

// rename file
fs.rename("file2.txt", "file3.txt", function (err) {
    if (err) throw err
    console.log("file2.txt has been renamed to file3.txt!")
})