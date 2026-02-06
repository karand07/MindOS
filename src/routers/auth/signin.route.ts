import { Router, type Request, type Response } from "express";
import jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt'
import { UserSchema } from "./auth.util.js";
import { userModel } from "../../model/user.model.js";

if(!process.env.USER_SECRET){
    throw new Error("USER_SECRET is not defined");
}

const USER_SECRET :string= process.env.USER_SECRET

const SignInRoute = Router();

SignInRoute.post('/signin',async (req:Request,res:Response) => {
    try {
        const signinData = UserSchema.safeParse(req.body)

    if(!signinData.success){
        return res.status(400).json({
            message:"Validation Failed",
            error:signinData.error
        })
    }

    const {username,password}= signinData.data;

    const userExist = await userModel.findOne({
        username
    })

    if(!userExist){
        return res.json({
            message:"Invalid Username"
        })
    }
    
    const isPasswordVaild = await bcrypt.compare(password,userExist.password as string)

    if(!isPasswordVaild){
        return res.status(401).json({
        message: "Invalid username or password",
      });
    }
    
    const token = jwt.sign({
            id:userExist._id
        },USER_SECRET,
        {expiresIn:"4h"}
    )
        res.json({
            message:"SignIn successful",
            token:token
        }) 

    } catch (error) {
     return res.status(500).json({
        message:"internal server error"
     })   
    }
    
})

export {SignInRoute}