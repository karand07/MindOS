import z from "zod";
export declare const UserSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.z.core.$strip>;
export type User = z.infer<typeof UserSchema>;
//# sourceMappingURL=auth.util.d.ts.map