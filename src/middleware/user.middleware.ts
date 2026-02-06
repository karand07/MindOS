import type { NextFunction, Request, Response } from "express";
import  jwt, { type JwtPayload }  from "jsonwebtoken";

if(!process.env.USER_SECRET){
    throw new Error("USER_SECRET is not defined")
}
const USER_SECRET = process.env.USER_SECRET as string

export default function userAuth(req:Request,res:Response,next:NextFunction){
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader||!authHeader?.startsWith("Bearer ")){
            return res.json({
                message:"No Token provided or Invalid Token"
            })
        }

        const token = authHeader.split(" ")[1];
        if(!token){
            return res.json({
                message:"token is missing"
            })
        }
        const decoded = jwt.verify(token ,USER_SECRET) as JwtPayload

        req.userId= decoded.id as string;
        next()
    } catch (error) {
        return res.json({
            message:"Invalid or expired token"
        })
    }
}