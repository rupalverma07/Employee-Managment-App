const express = require('express')
const cors = require('cors')
require("dotenv").config();
const db = require('./config/db');
const routes = require("./routes/index")
const app = express();

app.use(cors())
app.options("*", cors())
app.use(express.json())
app.use("/api", routes)
const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
})