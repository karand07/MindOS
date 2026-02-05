import {Schema , model, Types} from "mongoose";

enum LinkTypes{
    TWEET="TWEET",
    YOUTUBE="YOUTUBE",
    BLOG="BLOG",
    ARTICLE="ARTICLE",
    PHOTO="PHOTO"
}

interface IContent{
    link:String,
    type:LinkTypes,
    title:String,
    tags:Types.ObjectId[],
    user:Types.ObjectId
}
const contentSchema = new Schema<IContent>({
    link:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:Object.values(LinkTypes),
        required:true
    },
    title:{
        type:String,
        required:true
    },
    tags:{
        type:[Schema.Types.ObjectId],
        ref:"tag"
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
})

export const contentModel = model<IContent>("content",contentSchema)