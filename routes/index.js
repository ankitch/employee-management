var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  //db
  // const data = await Employee.findAll()
  res.render("index", { title: "Hello", data: [] });
});

module.exports = router;
