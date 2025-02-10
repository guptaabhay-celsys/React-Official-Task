import { Request, Response } from "express";
import { ProductService } from "../services/productService";

export class ProductsController {
    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();

        this.getAllProducts = this.getAllProducts.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.filterProducts = this.filterProducts.bind(this);
    }

async getAllProducts(req: Request, res: Response) {
    try {
        const products = await this.productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
      console.error("Error in getAllProducts:", error);
        res.status(500).json({ message: 'Error fetching products' });
    }
};

async updateQuantity(req: Request, res: Response) {
  const { products } = req.body;

  if (!Array.isArray(products)) {
      return res.status(400).json({
          message: "Invalid products array in request body",
      });
  }

  const errors: { productId: number; message: string }[] = [];

  try {
      for (const product of products) {
          const { productId, quantity } = product;

          try {
              await this.productService.updateQuantity(quantity, productId);
          } catch (error) {
              const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
              errors.push({ productId, message: errorMessage });
          }
      }

      if (errors.length > 0) {
          return res.status(400).json({
              message: "Some products could not be updated",
              errors,
          });
      }

      return res.status(200).json({ message: "Stock updated successfully" });
  } catch (error) {
      console.error("Error updating stock:", error);

      const errorMessage = error instanceof Error ? error.message : "Unexpected server error";
      return res.status(500).json({ message: errorMessage });
  }
}

async filterProducts(req: Request, res: Response) {
  try {
    const { filters } = req.body;

    const filteredProducts = await this.productService.filterProducts(filters);
    res.status(200).json(filteredProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

}
