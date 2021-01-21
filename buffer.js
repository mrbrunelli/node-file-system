const binary1 = Buffer.from("Hello! I'm a string!")
const binary2 = Buffer.from("HELLO! I'M A STRING!")
console.log(binary1)
console.log(binary2)

// 0 if they are equal
// 1 if buf1 is higher than buf2
// -1 if buf1 is lower than buf2
const isEqual = Buffer.compare(binary1, binary2)
console.log(isEqual)

// overwrite parts of an existing buffer
const buf = Buffer.from("1 2 3 4 5 6")
buf.write(" 50 60 70",3)
console.log(buf.toString())

// display each value in a buffer object
for (let b of buf.values()) {
    console.log(b)
}
