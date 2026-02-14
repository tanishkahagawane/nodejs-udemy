const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Assignment</title></head>");
    res.write("<body><h1>Hi , Welcome !!</h1></body>");
    res.write(
      "<body><form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Submit</button></form></body>",
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Assignment</title></head>");
    res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");

    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("output ::", parsedBody.split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
    return;
  }
  res.setHeader("Context-Type", "text/html");
  res.write("<head><title>Assignment</title></head>");
  res.write("<body><h1>Page not Found !!!!</h1></body>");
  res.write("</html>");
  res.end();
};

exports.handler = requestHandler;
