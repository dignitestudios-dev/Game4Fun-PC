import { z } from "zod";

export const signUpSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z
    .string({ message: "Password is required" })
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .regex(/[A-Za-z]/, "Include at least one letter")
    .regex(/\d/, "Include at least one number")
    .nonempty("Password is required"),
    // .min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .nonempty("Confirm password is required"),
  terms: z
    .boolean()
    .refine((val) => val === true, { message: "You must accept terms & conditions" }),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
