import { model, Schema, Types } from "mongoose";
const linkSchema = new Schema({
    hash: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        unique: true,
        required: true
    }
}, {
    timestamps: true
});
linkSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });
export const linkModel = model("link", linkSchema);
//# sourceMappingURL=links.model.js.map