import express from "express"
import { authenticationController } from "../controllers/authentication.controller.js"
import { authenticationMiddleware } from "../middlewares/authentication.middleware.js"

const router = express.Router()


router.post("/register", authenticationMiddleware.validateRegister, authenticationController.register)

// Renders
router.get("/login", authenticationController.formLogin)
router.get("/register", authenticationController.formRegister)
router.get("/forgot-password", authenticationController.formForgotPassword)

export default router