import * as z from "zod";

export const RegisterSchema = z.object({
  fullname: z.string().min(4, {
    message: "Fullname must be at least 4 characters.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email required",
    })
    .email({
      message: "Email not valid",
    }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});
