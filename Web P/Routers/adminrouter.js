const express = require('express');
const router = express.Router();
const admincontroller = require("../Controllers/admincontroller");
const {isAuth} = require("../Middleware/authorize");

router.get("/",isAuth,admincontroller.homePage);

module.exports = router;