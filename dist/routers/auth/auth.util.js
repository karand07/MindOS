import z from "zod";
export const UserSchema = z.object({
    username: z
        .string()
        .min(2, "Username must be at least 2 characters")
        .max(8, "Username must be at most 8 characters")
        .trim(),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must be at most 20 characters")
        .regex(/[A-Z]/, "Must contain one uppercase letter")
        .regex(/[a-z]/, "Must contain one lowercase letter")
        .regex(/[0-9]/, "Must contain one number"),
});
//# sourceMappingURL=auth.util.js.map