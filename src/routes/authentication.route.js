import express from "express"
import { authenticationRender } from "../controllers/renders/authentication.render.js"
import { authenticationController } from "../controllers/authentication.controller.js"
import { authenticationMiddleware } from "../middlewares/authentication.middleware.js"

const router = express.Router()


router.post("/register", authenticationMiddleware.validateRegister, authenticationController.register)

// Renders
router.get("/login", authenticationRender.formLogin)
router.get("/register", authenticationRender.formRegister)
router.get("/forgot-password", authenticationRender.formForgotPassword)

export default router