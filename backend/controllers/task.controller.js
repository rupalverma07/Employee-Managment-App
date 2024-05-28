const multer = require('multer');
const Task = require('../models/task.model')
const fs = require('fs');
const path = require('path');

//Configure multer for file upload
// Ensure the uploads directory exists
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

const createTask = (req,res) =>{
    // console.log(req)
    const{name,description, assigned_to,remark} = req.body;
    const image =req.file.filename;

    Task.create({name, description, image, assigned_to,remark}, (err, result) =>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(201).send('Task created')
    })

}

const getAllEmployeeTask = (req,res) =>{
    Task.getAllTask((err, tasks) =>{
        if(err){
            return res.status(500).send(err)
        }
        const tasksWithImageUrls = tasks.map(task => ({
            ...task,
            imageUrl: `${req.protocol}://${req.get('host')}/uploads/${task.image}`
        }));
        res.status(200).json(tasksWithImageUrls);
    })
}

const getTasksByEmployee = async(req,res) =>{
    const {empId} = req.userId;
    console.log(empId,'id')
    console.log(req.userId)
    Task.findTaskByEmployee(req.userId,(err, tasks) =>{
        if(err){
            return res.status(500).send(err)
        }
        const tasksWithImageUrls = tasks.map(task => ({
            ...task,
            imageUrl: `${req.protocol}://${req.get('host')}/uploads/${task.image}`
        }));
        res.status(200).json(tasksWithImageUrls);
    })
}

const editTask = (req,res) =>{
    console.log(req.file)
    const{id} = req.params;
    const{remark} = req.body
    const image =req.file.filename;

    Task.updateTask(id, { image,remark}, (err, result) =>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(201).send('Task Updated')
    })

}
module.exports ={createTask,upload,getAllEmployeeTask,getTasksByEmployee,editTask}