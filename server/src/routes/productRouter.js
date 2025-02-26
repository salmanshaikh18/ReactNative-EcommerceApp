import { Router } from "express";
import { getProductByCategoryId } from "../controllers/productController.js";

const productRouter = Router();

productRouter.get("/:categoryId", getProductByCategoryId);

export default productRouter;
