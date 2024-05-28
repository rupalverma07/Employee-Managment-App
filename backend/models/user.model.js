const db = require('../config/db');

const User = {
    create:(user, callback) =>{
        const query = 'INSERT INTO users (fullname,email, password, role) VALUES(?,?,?,?)';
        db.query(query,[user.fullname,user.email, user.password, user.role], callback);
    },
    findByEmailId:(email,callback) =>{
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query,[email],callback)
    },
    findByEmployeeId:(id,callback) =>{
        const query = 'SELECT * FROM users WHERE id = ?';
        db.query(query,[id],callback)
    },
    findByRole:(callback) =>{
        const query = 'SELECT * FROM users WHERE role = "employee"'
        db.query(query,callback)
    }
}

module.exports = User;