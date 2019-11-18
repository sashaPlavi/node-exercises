const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });

    res.write("<h1>Hello Node!!!!</h1>\n");
    res.write(`<h1>${req.url.slice(1)}</h1>`);
    res.end();
  })
  .listen(3000);

console.log("server runing at 3000");
