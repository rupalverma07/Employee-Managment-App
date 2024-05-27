const express = require("express")
const { upload, createTask } = require("../controllers/task.controller")

const router = express.Router()

router.post('/new', upload.single('image'), createTask)

module.exports = router