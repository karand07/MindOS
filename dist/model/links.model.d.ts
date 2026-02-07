import { Types } from "mongoose";
interface ILink {
    hash: String;
    user: Types.ObjectId;
}
export declare const linkModel: import("mongoose").Model<ILink, {}, {}, {}, import("mongoose").Document<unknown, {}, ILink, {}, import("mongoose").DefaultSchemaOptions> & ILink & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, ILink>;
export {};
//# sourceMappingURL=links.model.d.ts.map