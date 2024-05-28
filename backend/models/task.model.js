const db = require('../config/db');

const Task = {
    create:(task, callback) =>{
        const query = `INSERT INTO tasks (name, description, image, assigned_to,remark) 
                        VALUES(?,?,?,?,?)`;
        db.query(query,[task.name, task.description, task.image, task.assigned_to,task.remark], callback)
    },
    getAllTask:(callback) =>{
        const query = 'SELECT * FROM tasks';
        db.query(query,callback)
    },
    findTaskByEmployee:(employeeId,callback) =>{
        const query = 'SELECT * FROM tasks WHERE assigned_to = ?'
        db.query(query,[employeeId],callback)
    },
    updateTask:(taskId, task,callback) =>{
        const query = 'UPDATE tasks SET image = ?, remark = ? WHERE id = ?'
        db.query(query,[task.image, task.remark, taskId],callback)
    }
}

module.exports = Task;