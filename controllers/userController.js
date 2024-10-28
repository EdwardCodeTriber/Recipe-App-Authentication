import User from "../models/user.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({error: "User Already Exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email, password: hashedPassword
        })

        res.status(201).json({
            _id: user._id,
            email: email.email
        })

    } catch (error) {
        if(error.name === "ValidatorError"){
            res.status(400).json({
                error: error.massage
            })
        }
    }
};

