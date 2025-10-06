// jest.mock debe ejecutarse antes de importar productService
jest.mock("../../repositories/product.repository", () => ({
  productRepository: {
    findAll: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

import { productRepository } from "../../repositories/product.repository";
import { productService } from "../product.service";
import type { ProductInput } from "../../schemas/product.schema";

const mockedRepository = productRepository as unknown as {
  findAll: jest.Mock;
  findById: jest.Mock;
  create: jest.Mock;
  update: jest.Mock;
  delete: jest.Mock;
};

describe("productService (unit)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("getAll devuelve lista de productos", async () => {
    const products = [
      {
        id: 1,
        name: "A",
        price: 10,
        stock: 1,
        category: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    mockedRepository.findAll.mockResolvedValue(products);

    await expect(productService.getAll()).resolves.toEqual(products);
    expect(mockedRepository.findAll).toHaveBeenCalled();
  });

  test("getById devuelve producto existente", async () => {
    const product = {
      id: 1,
      name: "A",
      price: 10,
      stock: 1,
      category: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockedRepository.findById.mockResolvedValue(product);

    await expect(productService.getById(1)).resolves.toEqual(product);
    expect(mockedRepository.findById).toHaveBeenCalledWith(1);
  });

  test("getById lanza error si no existe", async () => {
    mockedRepository.findById.mockResolvedValue(null);
    await expect(productService.getById(999)).rejects.toThrow(
      "Producto no encontrado"
    );
    expect(mockedRepository.findById).toHaveBeenCalledWith(999);
  });

  test("create llama a repository.create y devuelve producto", async () => {
    const input: ProductInput = { name: "B", price: 20, stock: 2, category: "Cat" };
    const created = { id: 2, ...input, createdAt: new Date(), updatedAt: new Date() };
    mockedRepository.create.mockResolvedValue(created);

    await expect(productService.create(input)).resolves.toEqual(created);
    expect(mockedRepository.create).toHaveBeenCalledWith(input);
  });

  test("update actualiza producto si existe", async () => {
    const existing = {
      id: 1,
      name: "A",
      price: 10,
      stock: 1,
      category: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const input: ProductInput = { name: "A+", price: 12, stock: 1, category: "C" };
    const updated = { ...existing, ...input, updatedAt: new Date() };

    mockedRepository.update.mockResolvedValue(updated);

    await expect(productService.update(1, input)).resolves.toEqual(updated);
    expect(mockedRepository.update).toHaveBeenCalledWith(1, input);
  });

  test("delete elimina producto si existe", async () => {
    const existing = {
      id: 1,
      name: "A",
      price: 10,
      stock: 1,
      category: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockedRepository.delete.mockResolvedValue(existing);

    await expect(productService.delete(1)).resolves.toEqual(existing);
    expect(mockedRepository.delete).toHaveBeenCalledWith(1);
  });
});
