import { z } from "zod";

export const checkoutSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  appartment: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  zipCode: z
    .string()
    .min(1, "Zipcode is required")
    .regex(/^[0-9A-Za-z\- ]+$/, "Invalid zipcode"),
  saveContact: z.boolean().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;