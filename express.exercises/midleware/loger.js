//creating midleware
const moment = require("moment");

const loger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")} ${
      req.originalUrl
    }:${moment().format()}`
  );
  next();
};

module.exports = loger;
