import { Schema, model, Types } from "mongoose";
var LinkTypes;
(function (LinkTypes) {
    LinkTypes["TWEET"] = "TWEET";
    LinkTypes["YOUTUBE"] = "YOUTUBE";
    LinkTypes["BLOG"] = "BLOG";
    LinkTypes["ARTICLE"] = "ARTICLE";
    LinkTypes["PHOTO"] = "PHOTO";
})(LinkTypes || (LinkTypes = {}));
const contentSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: Object.values(LinkTypes),
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [Schema.Types.ObjectId],
        ref: "tag"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
});
export const contentModel = model("content", contentSchema);
//# sourceMappingURL=content.model.js.map