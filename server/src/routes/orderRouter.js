import { Router } from "express";
import { createOrder, createTransaction, getOrdersByUserId } from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.post("/transaction", createTransaction);
orderRouter.get("/:userId", getOrdersByUserId)
orderRouter.post("/create-order", createOrder)

export default orderRouter;
