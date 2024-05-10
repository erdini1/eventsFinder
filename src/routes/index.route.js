import express from "express"
import userRouter from "./user.route.js"
import authRouter from "./authentication.route.js"
import eventRouter from "./event.route.js"

const router = express.Router()

router.use("/auth", authRouter)
router.use("/event", eventRouter)
router.use("/user", userRouter)

export default router