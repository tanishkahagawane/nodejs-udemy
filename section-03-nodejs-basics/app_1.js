// ///// create server-----------------------------------------

// const http = require("http"); // import core module
// // to import your js file use - require("./http"); ./ or / , js is added automatically to file

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers); //prints a object in terminal
//   //process.exit(); // hard exits event loop
//   //response
//   res.setHeader("Context-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My First Page</title></head>");
//   res.write("<body><h1>Hello from my node.js server!</h1></body>");
//   res.write("</html>");
//   res.end();
// });

// server.listen(3000);

/////////////////////////////////////////////////////////////////////
///// Routing request --lets connect both req and response-----------------------------------------
// // 1. for / nothing - > load page , where user enters data , which then stores in a file on server once its sent
// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>Enter Message</title></head>");
//     res.write(
//       "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>",
//     );
//     //message - The name does not have to be "message"!
//     //It will add any input data to the request and make it accessible via the assigned name.
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/message" && method === "POST") {
//     fs.writeFileSync("message.txt", "DUMMY");
//     //res.writeHead(302, {});  // to set meta data // OR
//     res.statusCode = 302; // 302 indicates we send the request to message and we redirect to localhost.
//     res.setHeader("Location", "/");
//     return res.end();
//   }
//   res.setHeader("Context-Type", "text/html"); // should not be called after res.end()
//   res.write("<html>");
//   res.write("<head><title>My First Page</title></head>");
//   res.write("<body><h1>Hello from my node.js server!</h1></body>");
//   res.write("</html>");
//   res.end();
// });

// server.listen(3000);

/////////////
// 2.Parsing the data that user sent us and writing that data into that file
//Incoming data is basically sent as a strem of data and that is a special construct javascript
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>",
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("chunk ::", chunk);
      body.push(chunk);
    }); //to listen o event here data event.
    //data event will be fired whenever a new chunk is ready to be read
    // output:
    // chunk :: <Buffer 6d 65 73 73 61 67 65 3d 74 65 73 74 6b 6b>
    // parsedBody :: message=testkk
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("parsedBody ::", parsedBody);
      const message = parsedBody.split("=")[1];
      // fs.writeFileSync("message.txt", message); //syncronous method
      fs.writeFileSync("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      }); // best way
    }); // This event listener , this will be fired once its done parsing the incoming requests data or the incoming requests
    //Buffer is global object made available by nodejs
  }
  res.setHeader("Context-Type", "text/html");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my node.js server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
