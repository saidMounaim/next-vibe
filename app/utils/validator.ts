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

export const LoginSchema = z.object({
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
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const EditProfileSchema = z.object({
  image: z
    .any()
    .refine((files) => files?.length >= 1, { message: "Image is required." })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
      message: ".jpg, .jpeg, .png and .webp files are accepted.",
    })
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
      message: `Max file size is 5MB.`,
    }),
  fullname: z.string().min(4, {
    message: "Fullname must be at least 4 characters.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Email not valid",
    }),
  mobile: z.string().min(1, {
    message: "Mobile is required",
  }),
});
