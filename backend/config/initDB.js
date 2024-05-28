const mysql = require("mysql2");
const connection = require("./db");

const initDb = () => {
  // Create database if it doesn't exist
  const createDbQuery = "CREATE DATABASE IF NOT EXISTS task_manager";
  connection.query(createDbQuery, (err, results) => {
    if (err) {
      console.error("Error creating database:", err);
      return;
    }
    console.log("Database created or already exists.");

    // Switch to the created database
    connection.changeUser({ database: "task_manager" }, (err) => {
      if (err) {
        console.error("Error switching to task_manager database:", err);
        return;
      }

      // Create users table if it doesn't exist
      const createUsersTableQuery = `
                CREATE TABLE IF NOT EXISTS users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    fullname VARCHAR(255) NOT NULL,
                    fullname VARCHAR(255) NOT NULL,
                    password VARCHAR(255) NOT NULL,
                    role ENUM('admin', 'employee') NOT NULL
                )
            `;
      connection.query(createUsersTableQuery, (err, results) => {
        if (err) {
          console.error("Error creating users table:", err);
          return;
        }
        console.log("Users table created or already exists.");
      });

      // Create tasks table if it doesn't exist
      const createTasksTableQuery = `
                CREATE TABLE IF NOT EXISTS tasks (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    description TEXT NOT NULL,
                    image VARCHAR(255),
                    assigned_to INT,
                    remark TEXT,
                    FOREIGN KEY (assigned_to) REFERENCES users(id)
                )
            `;
      connection.query(createTasksTableQuery, (err, results) => {
        if (err) {
          console.error("Error creating tasks table:", err);
          return;
        }
        console.log("Tasks table created or already exists.");
      });
    });
  });
};

module.exports = initDb;
