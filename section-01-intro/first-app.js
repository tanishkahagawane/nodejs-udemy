// console.log("Hello from Node.js");

//write output to file
const fs = require("fs"); // import file system module
fs.writeFileSync("hello.txt", "hello from Node.js"); // writes the file to harddrive
