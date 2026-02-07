import { Router } from "express";
import userAuth from "../../middleware/user.middleware.js";
import { linkModel } from "../../model/links.model.js";
import { linkUrl } from "./link.util.js";
import { contentModel } from "../../model/content.model.js";
import { userModel } from "../../model/user.model.js";
const linkRoute = Router();
linkRoute.post('/share', userAuth, async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(400).json({
                message: "unautharised user"
            });
        }
        const share = req.body.share;
        if (share) {
            const url = linkUrl(10);
            if (!url) {
                return res.status(404).json({
                    message: "url generation failed"
                });
            }
            await linkModel.create({
                hash: url,
                user: userId
            });
            res.status(201).json({
                message: "brain sharing enabled",
                url: url
            });
        }
        else {
            await linkModel.deleteOne({
                user: userId
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "internal server error",
            error: error
        });
    }
});
linkRoute.get('/:share', async (req, res) => {
    try {
        const url = req.params.share;
        if (!url) {
            return res.status(400).json({
                message: "url not found"
            });
        }
        const link = await linkModel.findOne({
            hash: url
        });
        if (!link) {
            return res.status(400).json({
                message: "invalid url"
            });
        }
        const content = await contentModel.find({
            user: link.user
        });
        const username = await userModel.findOne({
            _id: link.user
        });
        if (!username) {
            return res.status(400).json({
                message: "invalid link user not found"
            });
        }
        if (!content) {
            return res.json({
                message: "no content found"
            });
        }
        res.status(201).json({
            username,
            content
        });
    }
    catch (error) {
    }
});
export { linkRoute };
//# sourceMappingURL=link.route.js.map