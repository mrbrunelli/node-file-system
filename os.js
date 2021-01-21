const os = require("os")

console.log("Platform: " + os.platform())
console.log("Arch: " + os.arch())
console.log("Release: " + os.release())

for (let o of os.cpus()) {
    console.log("Model: " + o.model)
    console.log("Speed: " + o.speed)
}
