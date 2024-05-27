const express = require("express")
const authRoute = require("./auth.route")
const taskRoute = require("./task.route")
const router = express.Router();

router.use("/auth", authRoute)
router.use("/task",taskRoute)

module.exports = router;