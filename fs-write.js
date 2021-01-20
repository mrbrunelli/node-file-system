const fs = require("fs")

// create a new file
// overwrite if it already exists
fs.writeFile("file.txt", "Hello! I'm a plain text file!", function (err) {
    if (err) throw err
    console.log("file.txt created and written!")
})