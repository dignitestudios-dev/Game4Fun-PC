import { z } from "zod";

export const changePasswordSchema = z
  .object({
    oldPassword: z
      .string()
     .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .regex(/[A-Za-z]/, "Include at least one letter")
    .regex(/\d/, "Include at least one number")
    .nonempty("Password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .regex(/[A-Za-z]/, "Include at least one letter")
    .regex(/\d/, "Include at least one number")
    .nonempty("Password is required"),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ["confirmNewPassword"],
    message: "Passwords do not match",
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    path: ["newPassword"],
    message: "New password must be different from old password",
  });


export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
