const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    console.log(filename);
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }

      res.writeHead(200, { "content-type": "text/html" });

      res.write(data);

      res.end();
    });
  })
  .listen(3000);

console.log("server runing at 3000");
