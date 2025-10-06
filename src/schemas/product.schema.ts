import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio"),
  price: z.number().positive("El precio debe ser mayor a 0"),
  stock: z.number().int().nonnegative("El stock no puede ser negativo"),
  category: z.string().optional(),
});

export type ProductInput = z.infer<typeof productSchema>;
