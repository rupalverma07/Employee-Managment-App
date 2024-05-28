const express = require("express")
const { upload, createTask, getAllEmployeeTask, getTasksByEmployee, editTask } = require("../controllers/task.controller")
const auth = require("../middleware/auth")

const router = express.Router()

router.post('/new', upload.single('image'), createTask)
router.get('/',getAllEmployeeTask)
router.get("/empTask",auth, getTasksByEmployee)
router.put("/:id",upload.single('image'), editTask)

module.exports = router