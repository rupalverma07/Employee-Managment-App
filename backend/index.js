const express = require('express')
const cors = require('cors')
require("dotenv").config();
const db = require('./config/db');
const routes = require("./routes/index")
const app = express();
const path = require('path');
const initDb = require('./config/initDB');
app.use(cors())
app.options("*", cors())

initDb();
app.use(express.json())
app.use("/api", routes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
})