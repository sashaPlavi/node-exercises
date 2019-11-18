const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    fs.readFile("index.html", function(err, data) {
      res.writeHead(200, { "content-type": "text/html" });

      res.write("<h1>Hello Node!!!!</h1>\n");
      res.write(data);
      res.end();
    });
  })
  .listen(3000);
fs.appendFile("index.html", "Hello content!", function(err) {
  if (err) throw err;
  console.log("Saved!");
});
console.log("server runing at 3000");
