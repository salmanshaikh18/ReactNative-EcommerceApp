import { Router } from "express";
import { createTransaction, getOrdersByUserId } from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.post("/transaction", createTransaction);
orderRouter.get("/:userId", getOrdersByUserId)

export default orderRouter;
