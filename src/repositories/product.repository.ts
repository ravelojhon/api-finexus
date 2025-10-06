import { prisma } from "../prisma/client";
import { ProductInput } from "../schemas/product.schema";

export const productRepository = {
  findAll: () => prisma.product.findMany(),
  findById: (id: number) => prisma.product.findUnique({ where: { id } }),
  create: (data: ProductInput) => prisma.product.create({ data }),
  update: (id: number, data: ProductInput) => prisma.product.update({ where: { id }, data }),
  delete: (id: number) => prisma.product.delete({ where: { id } }),
};
