import z from "zod";
import { LinkTypes } from "../../model/content.model.js";
export declare const contentSchema: z.ZodObject<{
    link: z.ZodURL;
    type: z.ZodEnum<typeof LinkTypes>;
    title: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.z.core.$strip>;
export type contentType = z.infer<typeof contentSchema>;
//# sourceMappingURL=content.util.d.ts.map