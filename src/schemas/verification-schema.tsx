import { z } from "zod";

export const verificationSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be exactly 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});
export type VerificationFormData = z.infer<typeof verificationSchema>;