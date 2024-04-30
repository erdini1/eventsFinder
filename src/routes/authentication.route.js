import express from "express"
import { authenticationController } from "../controllers/authentication.controller.js"

const router = express.Router()

router.get("/login", authenticationController.login)
router.get("/register", authenticationController.register)

export default router