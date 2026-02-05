import {model, Schema} from "mongoose";

interface ITag{
    title:String
}

const tagSchema = new Schema<ITag>({
    title:{
        type:String,
        required:true,
        unique:true,
        trim:true
    }
})

export const tagModel = model<ITag>("tag",tagSchema)