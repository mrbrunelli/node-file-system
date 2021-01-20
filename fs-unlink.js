const fs = require("fs")

// delete file
fs.unlink("file3.txt", function (err) {
    if (err) throw err
    console.log("file3.txt has been deleted!")
})
