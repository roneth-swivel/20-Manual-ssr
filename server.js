const { createServer } = require("http");
const { parse } = require("path");

const server = createServer((req, res) => {
  const pathname = parse(req.url, true).pathname;

  if (pathName === "/") {
    res.end("Hello World");
  } else if (pathNamev === "/test") {
    res.end("TEST");
  } else {
    res.end("The URL cannot ne found");
  }
});

server.listen(8000, () => console.log("Listening for requests on port 8000"));
