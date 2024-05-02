import express from "express"
import { authenticationRender } from "../controllers/renders/authentication.render.js"
import { authenticationController } from "../controllers/authentication.controller.js"

const router = express.Router()


router.post("/register", authenticationController.register)

// Renders
router.get("/login", authenticationRender.formLogin)
router.get("/register", authenticationRender.formRegister)
router.get("/forgot-password", authenticationRender.formForgotPassword)

export default router