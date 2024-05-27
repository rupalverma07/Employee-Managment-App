const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rupalsoni0704",
    database:'task_manager'
})

connection.connect(err =>{
    if(err){
        console.log("Error connecting to MySql")
        return;
    }
    console.log('Connected to MySQL DB');
})

module.exports = connection;