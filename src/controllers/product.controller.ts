import { Request, Response, NextFunction } from "express";
import { productSchema } from "../schemas/product.schema";
import { productService } from "../services/product.service";

export const productController = {
  getAll: async (_: Request, res: Response, next: NextFunction) => {
    try {
      const products = await productService.getAll();
      res.json(products);
    } catch (err) { next(err); }
  },
  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await productService.getById(Number(req.params.id));
      res.json(product);
    } catch (err) { next(err); }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = productSchema.parse(req.body);
      const product = await productService.create(validated);
      res.status(201).json(product);
    } catch (err) { next(err); }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = productSchema.parse(req.body);
      const product = await productService.update(Number(req.params.id), validated);
      res.json(product);
    } catch (err) { next(err); }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await productService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (err) { next(err); }
  },
};
