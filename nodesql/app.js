const exspress = require("express");
const mysql = require("mysql");
//makin conection
const connection = mysql.createConnection({
  host: "example.org",
  user: "bob",
  password: "topsecret"
});
// conect
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
const app = exspress();

//create db
app.get("/create", (req, res) => {
  let sql = "create database";
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);

    res.send("db created");
  });
});

app.listen("3000", () => {
  console.log("server started");
});
