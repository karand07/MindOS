import { Router } from "express";
import { UserSchema } from "./auth.util.js";
import { userModel } from "../../model/user.model.js";
import bcrypt from 'bcrypt'
const SignupRoute = Router();

SignupRoute.post('/signup',async (req,res) =>{
    try{
    const signupData = UserSchema.safeParse(req.body)
    
    if(!signupData.success){
        return res.status(400).json({
            message:"Validation failed",
            error:signupData.error
        })
    }
    const {username,password}=signupData.data

   const userExist = await userModel.findOne({
    username
    })

    if(userExist){
        return res.json({
            message:"username already exists"
        })
    }
    const hasshedpass = await bcrypt.hash(password,10)

    await userModel.create({
        username,
        password:hasshedpass
    })

    res.json({
        meassage:"registration completed succesfully"
    })}catch(error){
        return res.status(500).json({
            message:"internal server error"
        })
    }
})

export {SignupRoute};