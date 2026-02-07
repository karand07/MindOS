interface IUser {
    username: String;
    password: String;
}
export declare const userModel: import("mongoose").Model<IUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
export {};
//# sourceMappingURL=user.model.d.ts.map