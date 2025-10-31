import { z } from "zod";

export const BenchmarkSchema = z.object({
  processor: z.string().min(1, "Processor is required"),
  graphicCard: z.string().min(1, "Graphic card is required"),
  game: z.array(z.string()).min(1, "At least one game is required"),
});

export type BenchmarkFormData = z.infer<typeof BenchmarkSchema>;
