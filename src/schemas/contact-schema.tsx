import { z } from "zod";

// ✅ Zod schema
export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long" })
    .max(100, { message: "Full name must be at most 100 characters long" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Full name can only contain letters and spaces",
    }),

  email: z
    .string()
    .email({ message: "Invalid email address" }),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(1000, { message: "Message must be at most 1000 characters long" }),
});

// ✅ TypeScript type inferred from schema
export type ContactFormData = z.infer<typeof contactSchema>;
