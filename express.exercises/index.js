const express = require("express");
const path = require("path");
const members = require("./members");

const loger = require("./midleware/loger");

const app = express();

//init modleware
app.use(loger);
//geting all members
app.get("/api/members", (req, res) => {
  res.json(members);
});
// geting single member
app.get("/api/members/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    //changing status code and eror mesage
    res
      .status(400)
      .json({ msg: `no member with id ${req.params.id} was found` });
  }
});

//sending file from a folder
/*
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
*/
// set static folder
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("server started on 3000");
});
