const fs = require("fs")

// create a new file if it does not exist
// just open if there is
fs.open("file2.txt", "w", function (err, file) {
    if (err) throw err
    console.log("file2.txt created!")
})