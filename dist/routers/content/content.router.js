import { Router } from "express";
import userAuth from "../../middleware/user.middleware.js";
import { contentModel } from "../../model/content.model.js";
import { contentSchema } from "./content.util.js";
const contentRoute = Router();
contentRoute.use(userAuth);
const partialcontent = contentSchema.partial();
contentRoute.post('/post', async (req, res) => {
    try {
        const userId = req.userId;
        const contentData = contentSchema.safeParse(req.body);
        if (!contentData.success) {
            return res.json({
                error: contentData.error
            });
        }
        const { link, type, title, tags } = contentData.data;
        const content = await contentModel.create({
            link,
            title,
            type,
            tags,
            user: userId
        });
        res.status(200).json({
            message: "content created successfully",
            id: content._id
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "internal server error",
            error: error
        });
    }
});
contentRoute.get('/get', async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.json("token expired");
        }
        const contents = await contentModel.find({
            user: userId
        });
        res.status(200).json({
            contents
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "internal server error",
            error: error
        });
    }
});
contentRoute.put('/update/:contentId', async (req, res) => {
    const userId = req.userId;
    const contentId = req.params.contentId;
    if (!userId) {
        return res.status(400).json({
            message: "unauthorizer user"
        });
    }
    const contentData = partialcontent.safeParse(req.body);
    if (!contentData.success) {
        return res.status(400).json({
            error: contentData.error
        });
    }
    const { link, type, title, tags } = contentData.data;
    const updateContent = await contentModel.findOneAndUpdate({
        user: userId,
        _id: contentId
    }, {
        link,
        title,
        tags,
        type
    }, { new: true });
    if (!updateContent) {
        return res.status(400).json({
            message: "content not found Or Unauthrized user"
        });
    }
    res.status(201).json({
        message: "content updated successfully",
        updateContent
    });
});
export { contentRoute };
//# sourceMappingURL=content.router.js.map