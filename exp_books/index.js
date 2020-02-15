const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("midleware");
});

const server = http.createServer(app).listen(5005);
