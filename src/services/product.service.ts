import { productRepository } from "../repositories/product.repository";
import { ProductInput } from "../schemas/product.schema";

export const productService = {
  getAll: () => productRepository.findAll(),
  getById: async (id: number) => {
    const product = await productRepository.findById(id);
    if (!product) throw new Error("Producto no encontrado");
    return product;
  },
  create: (data: ProductInput) => productRepository.create(data),
  update: (id: number, data: ProductInput) => productRepository.update(id, data),
  delete: (id: number) => productRepository.delete(id),
};
