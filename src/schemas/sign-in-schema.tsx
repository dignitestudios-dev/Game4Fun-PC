import z from "zod";

export const signInSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .trim()
    .email("Enter a valid email"),
  password: z
    .string({ message: "Password is required" })
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .regex(/[A-Za-z]/, "Include at least one letter")
    .regex(/\d/, "Include at least one number"),
});

export type SignInInput = z.infer<typeof signInSchema>;
