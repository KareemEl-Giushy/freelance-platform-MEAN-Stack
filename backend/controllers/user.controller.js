const User = require("../models/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.register = async (req, res) => {
    const {firstname, lastname, email, password} = req.body;

    try {

        const hashedPass = await bcrypt.hash(password, 10)
        const newUser = new User({
            firstname, lastname, email, password: hashedPass
        });

        await newUser.save();

        res.status(201).json({message: "User Created Successfully"})

    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message: "User Not Found"})

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Invalid Credentials"})

        const token = jwt.sign({ id: user._id}, "123456789", {expiresIn: '1h'})

        res.status(200).json({token: token})

    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

exports.getUserById = async (req, res) => {
    try{  

        const user = await User.findById(req.params.id);

        res.status(200).json(user)
    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

exports.editUser = async (req, res) => {
    try{

        await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            message: "User Updated"
        })
    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}