import {model, Schema,Types} from "mongoose";

interface ILink{
    hash:String,
    user:Types.ObjectId
}

const linkSchema = new Schema <ILink>({
    hash:{
        type:String,
        required:true,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"user" ,
        required:true
    }
})

const linkModel = model<ILink>("link",linkSchema)