import {model, Schema,Types} from "mongoose";

interface ILink{
    hash:String,
    user:Types.ObjectId
    createdAt:Date
}

const linkSchema = new Schema <ILink>({
    hash:{
        type:String,
        required:true,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"user" ,
        unique:true,
        required:true
    },
    createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600 
  }
},{
    timestamps:true
    }
)

export const linkModel = model<ILink>("link",linkSchema)