import z from "zod";


 const User = z.object({
  username: z.string().min(2).max(8).trim(),
  password: z.string().min(4).max(10),
})

type User = z.infer<typeof User>

export default User;