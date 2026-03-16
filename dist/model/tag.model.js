import { model, Schema } from "mongoose";
const tagSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    }
});
export const tagModel = model("tag", tagSchema);
//# sourceMappingURL=tag.model.js.map