import { Schema, model } from "mongoose";
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        unique: true,
        trim: true
    }
});
export const userModel = model('user', userSchema);
//# sourceMappingURL=user.model.js.map