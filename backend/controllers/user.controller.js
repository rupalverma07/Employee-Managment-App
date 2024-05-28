const User = require('../models/user.model')
const getAllEmployee = (req,res) =>{
    // console.log(req)
    User.findByRole((err, result) =>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).json(result)
    })

}

const getEmployeeById = (req,res) =>{
    // console.log(req)
    const{id} = req.params;
    User.findByEmployeeId(id,(err, result) =>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).json(result)
    })

}

module.exports ={getAllEmployee,getEmployeeById}