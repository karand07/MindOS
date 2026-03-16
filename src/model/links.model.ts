import {model, Schema,Types} from "mongoose";

interface ILink{
    hash:String,
    user:Types.ObjectId
}

const linkSchema = new Schema<ILink>({
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
},{
  timestamps: true
});

linkSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });

export const linkModel = model<ILink>("link",linkSchema)