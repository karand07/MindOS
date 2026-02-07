import { Router, type Request, type Response } from "express";
import userAuth from "../../middleware/user.middleware.js";
import { contentModel } from "../../model/content.model.js";
import { contentSchema } from "./content.util.js";
import { json } from "zod";

const contentRoute = Router();

contentRoute.use(userAuth);

contentRoute.post
('/post',
    async (req:Request,res:Response) => {
    try {
        const userId =req.userId as string
    const contentData = contentSchema.safeParse(req.body)

    if(!contentData.success){
        return res.json({
            error:contentData.error
        })
    }

    const {link,type,title,tags} = contentData.data

    const content = await contentModel.create({
        link,
        title,
        type,
        tags,
        user:userId
    })

    res.status(200).json({
        message:"content created successfully",
        id:content._id
    })

    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
            error:error
        })
    }
    
})

contentRoute.get('/get',
    async (req:Request,res:Response) => {
    try {
        const userId = req.userId;
        if (!userId){
            return res.json("token expired")
        }
        const contents = await contentModel.find({
            user:userId
        })

        res.status(200).json({
            contents
        })
    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
            error:error
        })
    }
})
export {contentRoute}