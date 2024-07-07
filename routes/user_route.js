import { Router } from "express";
import { signUpUser, loginUser } from "../controller/user_controller.js";

const userRouter = Router();

// Auth routes
userRouter.post('/signUp', signUpUser); 
userRouter.post('/login', loginUser); 

export default userRouter;