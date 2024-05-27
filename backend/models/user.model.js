const db = require('../config/db');

const User = {
    create:(user, callback) =>{
        const query = 'INSERT INTO users (fullname,email, password, role) VALUES(?,?,?,?)';
        db.query(query,[user.fullname,user.email, user.password, user.role], callback);
    },
    findByEmailId:(email,callback) =>{
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query,[email],callback)
    }
}

module.exports = User;