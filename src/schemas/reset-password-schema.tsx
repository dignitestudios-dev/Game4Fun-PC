import { z } from "zod";

export const passwordSchema = z.object({
  password: z
   .string({ message: "Password is required" })
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .regex(/[A-Za-z]/, "Include at least one letter")
    .regex(/\d/, "Include at least one number")
    .nonempty("Password is required"),

  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], 
});
export type PasswordInput = z.infer<typeof passwordSchema>;