import { Router } from "express"
import { authController } from "../controllers/userController.js"

const userRouter = Router()

userRouter.post("/auth", authController)

export default userRouter