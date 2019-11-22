const express = require("express");
const router = express.Router();
const members = require("../../members");
//console.log(members);
console.log(router);
//console.log(express);

//geting all members
router.get("/", (req, res) => {
  res.json(members);
  console.log(req);

  console.log("loging" + members);
});
// geting single member
router.get("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    //changing status code and eror mesage
    res
      .status(400)
      .json({ msg: `no member with id ${req.params.id} was found` });
    console.log("bla2");
  }
});

module.exports = router;
