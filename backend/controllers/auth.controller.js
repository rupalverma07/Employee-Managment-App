const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateAuthTokens } = require("../service/token.service");

const register = async(req, res) =>{
    const{fullname,email, password, role} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    User.create({fullname,email, password:hashedPassword,role}, (err, result) =>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(201).send('User registered')
    })
}

const login = (req,res) =>{
    const {email, password} = req.body;
    User.findByEmailId(email, async(err, result) =>{
        if(err){
            return res.status(500).send(err)
        }
        console.log(result)
        const userData = result[0];
        const isMatch = await bcrypt.compare(password,userData.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Credential"})
        }
        const token = await generateAuthTokens(userData);
        res.status(200).json({user:userData, token})
    })
}

module.exports = {register, login}