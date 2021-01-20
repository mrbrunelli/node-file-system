const fs = require("fs")

// append new text to file
fs.appendFile("file.txt", "\nThis is my new text.", function (err) {
    if (err) throw err
    console.log("Added new text in file.txt")
})