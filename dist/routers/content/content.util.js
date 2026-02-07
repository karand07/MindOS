import z from "zod";
import { LinkTypes } from "../../model/content.model.js";
export const contentSchema = z.object({
    link: z.url("invalid url").min(1, "link required"),
    type: z.enum(LinkTypes),
    title: z.string().min(1, "title is required").max(100, "title is too long"),
    tags: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid tag id"))
});
//# sourceMappingURL=content.util.js.map