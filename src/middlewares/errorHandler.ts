import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(err: any, _: Request, res: Response, __: NextFunction) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Error de validación",
      errors: err.errors.map(e => ({ field: e.path, message: e.message })),
    });
  }
  return res.status(500).json({ message: err.message || "Error interno del servidor" });
}
