import z from "zod";

export const BenchmarkSchema = z.object({
  processor: z.string().min(2, "Processor is required"),
  graphicCard: z.string().min(2, "Graphic Card is required"),
  ram: z.string().min(1, "RAM is required"),
  resolution: z.string().min(2, "Resolution is required"),
  game: z.array(z.string().min(1, "Game cannot be empty")).min(1, "At least one game is required"),
});

export  type BenchmarkFormData = z.infer<typeof BenchmarkSchema>;