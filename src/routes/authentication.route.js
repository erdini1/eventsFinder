import express from "express"
import { authenticationController } from "../controllers/authentication.controller.js"
import { authenticationMiddleware } from "../middlewares/authentication.middleware.js"

const router = express.Router()

router.get("/register", authenticationController.formRegister)
router.post("/register", authenticationMiddleware.validateRegister, authenticationController.register)
router.get("/confirmation/:token", authenticationController.confirmation)

router.get("/forgot-password", authenticationController.formForgotPassword)
router.post("/forgot-password", authenticationMiddleware.validateForgotPassword, authenticationController.forgotPassword)

router.get("/forgot-password/:token", authenticationMiddleware.validateResetPassword, authenticationController.formRecoverAccess)
router.post("/forgot-password/:token", authenticationMiddleware.validateResetPassword, authenticationController.recoverAccess)

router.get("/login", authenticationController.formLogin)
router.post("/login", authenticationMiddleware.validateLogin, authenticationController.login)

export default router