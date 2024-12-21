import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User does not exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            //generate token 
            const token = createToken(user._id)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }

}

//Route for user sign up
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //check if user alreay exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists." })
        }

        //validation
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please entere a valid email." })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Password should be at least 8 characters." })
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

//Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PW) {
            // Generate token with a proper payload
            const token = jwt.sign({ email: process.env.ADMIN_EMAIL }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({
                success: true,
                token
            });
        } else {
            res.json({
                success: false,
                message: "Failed to login as Admin"
            });
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};



export { loginUser, registerUser, adminLogin }