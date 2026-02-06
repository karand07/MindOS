import { Types } from "mongoose";
declare enum LinkTypes {
    TWEET = "TWEET",
    YOUTUBE = "YOUTUBE",
    BLOG = "BLOG",
    ARTICLE = "ARTICLE",
    PHOTO = "PHOTO"
}
interface IContent {
    link: String;
    type: LinkTypes;
    title: String;
    tags: Types.ObjectId[];
    user: Types.ObjectId;
}
export declare const contentModel: import("mongoose").Model<IContent, {}, {}, {}, import("mongoose").Document<unknown, {}, IContent, {}, import("mongoose").DefaultSchemaOptions> & IContent & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IContent>;
export {};
//# sourceMappingURL=content.model.d.ts.map