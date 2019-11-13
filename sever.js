const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200);

    res.write("<h1>Hello Node!!!!</h1>\n");
    res.end();
  })
  .listen(3000);

console.log("server runing at 3000");
