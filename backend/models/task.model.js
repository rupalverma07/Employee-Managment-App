const db = require('../config/db');

const Task = {
    create:(task, callback) =>{
        const query = `INSERT INTO tasks (name, description, image, assigned_to) 
                        VALUES(?,?,?,?)`;
        db.query(query,[task.name, task.description, task.image, task.assigned_to], callback)
    }
}

module.exports = Task;