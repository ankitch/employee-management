const express = require("express");
const { route } = require(".");
const router = express.Router();
const { userDetail } = require("../controllers/userController");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

router.post("/", (req, res, next) => {
  const { title, company, phoneno } = req.body;

  //db write

  res.status(200).json({ message: req.body });
});

router.get("/detail", userDetail);

module.exports = router;
