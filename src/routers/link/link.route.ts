import { Router, type Request, type Response } from "express";
import userAuth from "../../middleware/user.middleware.js";
import { linkModel } from "../../model/links.model.js";
import { linkUrl } from "./link.util.js";
import { contentModel } from "../../model/content.model.js";
import { userModel } from "../../model/user.model.js";

const linkRoute = Router();


linkRoute.post("/share",
     userAuth,
      async (req: Request, res: Response) => {

    try {

        const userId = req.userId
        const share = req.body.share

        if (!userId) {
            return res.status(401).json({
                message: "unauthorised user"
            })
        }

        if (share) {

            const existingLink = await linkModel.findOne({
                user: userId
            })

            if (existingLink) {
                return res.status(200).json({
                    message: "brain sharing already enabled",
                    url: existingLink.hash
                })
            }

            const url = linkUrl(10)

            await linkModel.create({
                hash: url,
                user: userId
            })

            return res.status(201).json({
                message: "brain sharing enabled",
                url: url
            })

        } else {

            await linkModel.deleteOne({
                user: userId
            })

            return res.status(200).json({
                message: "brain sharing disabled"
            })
        }

    } catch (error) {

        return res.status(500).json({
            message: "internal server error",
            error
        })
    }

})

linkRoute.get("/:share", 
    async (req: Request, res: Response) => {

    try {

        const url = req.params.share
        if(!url){
            return res.status(400).json({
                message: "share url is required"
            })
        }
        const link = await linkModel.findOne({
            hash: url
        })

        if (!link) {
            return res.status(410).json({
                message: "shared link invalid or expired"
            })
        }

        const content = await contentModel.find({
            user: link.user
        })

        const username = await userModel.findOne({
            _id: link.user
        })

        if (!username) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        return res.status(200).json({
            username,
            content
        })

    } catch (error) {

        return res.status(500).json({
            message: "internal server error",
            error
        })
    }

})

export{linkRoute}