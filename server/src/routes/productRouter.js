import { Router } from "express";
import { getProductByCategoryId } from "../controllers/productController.js";

const productRouter = Router();

productRouter.post("/:categoryId", getProductByCategoryId);

export default productRouter;
