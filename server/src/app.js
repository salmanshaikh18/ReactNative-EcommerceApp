import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import productRouter from "./routes/productRouter.js";
import orderRouter from "./routes/orderRouter.js";
import { connectToDB } from "./config/connectToDB.js";
import { buildAdminJS } from "./config/setup.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

// Routes
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

// DB Connection
connectToDB(MONGO_URI);
buildAdminJS(app);

app.listen(PORT, () => {
  console.log("Server is running at port: ", PORT);
});
