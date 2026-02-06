import {Schema,model} from "mongoose";

interface IUser{
    username:String,
    password:String
}

const userSchema = new Schema<IUser>({
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    password:{
        type:String,
        unique:true,
        trim:true
    }
})

export const userModel = model<IUser>('user',userSchema)