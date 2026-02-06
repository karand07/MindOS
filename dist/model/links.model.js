import { model, Schema, Types } from "mongoose";
const linkSchema = new Schema({
    hash: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
});
const linkModel = model("link", linkSchema);
//# sourceMappingURL=links.model.js.map