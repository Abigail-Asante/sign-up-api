import { userModel } from "../model/user_model.js"; 

//  user signup
export const signUpUser = async (req, res, next) => {
    try {
        // username, email and password for signup
        const { userName, email, password } = req.body; 
        // post newuser to the database
        await userModel.create({ userName, email, password }); 
        // send back a success response
        res.status(201).json({ message: 'User created successfully' }); 
    } catch (error) {
        if (error.code === 11000) { // 11000 means user already exists (duplicate key error)
            res.status(400).json({ message: 'User already exists' }); // Send back an error message
        } else {
            next(error);
        }
    }
};

//  user login
export const loginUser = async (req, res, next) => {
    try {
        // email and password for login
        const { email, password } = req.body;
        // find user in database
        const user = await userModel.findOne({ email }); 
        if (!user || user.password !== password) { // If no user found or password doesn't match
            return res.status(401).json({ message: 'Invalid email or password' }); // Send back an error message
        }
        res.status(200).json({ message: 'Login successful'}); // Send back a success message
    } catch (error) {
        next(error); 
    }
};


