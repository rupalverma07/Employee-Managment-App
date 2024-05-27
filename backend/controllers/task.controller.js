const multer = require('multer');
const Task = require('../models/task.model')

//Configure multer for file upload

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'uploads/')
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() + '-'+ file.originalname)
    }
})
const upload = multer({storage});

const createTask = (req,res) =>{
    const{name,description, assigned_to} = req.body;
    const image =req.file.filename;

    Task.create({name, description, image, assigned_to}, (err, result) =>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(201).send('Task created')
    })

}

module.exports ={createTask,upload}