import { Router } from "express";
import { getAllCategories } from "../controllers/categoryController.js";

const categoryRouter = Router();

categoryRouter.post("/", getAllCategories)

export default categoryRouter;
