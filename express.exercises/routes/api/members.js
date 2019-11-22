const express = require("express");
const router = express.Router();
const members = require("../../members");
const uuid = require("uuid");
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
//creating member
router.post("/", (req, res) => {
  const NewMember = {
    id: uuid.v4(),
    name: req.body.name,
    mail: req.body.mail,
    status: "active"
  };
  if (!NewMember.name || !NewMember.mail) {
    return res.status(400).json({ msg: "please enter mail and name" });
  }
  members.push(NewMember);
  res.json(members);
});

module.exports = router;
