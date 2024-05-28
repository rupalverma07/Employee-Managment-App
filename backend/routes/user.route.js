const express = require("express")
const { getAllEmployee, getEmployeeById } = require("../controllers/user.controller")

const router = express.Router()

router.get("/employees",getAllEmployee)
router.get("/:id",getEmployeeById)

module.exports = router