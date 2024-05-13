import express from "express"
import { eventController } from "../controllers/event.controller.js"

const router = express.Router()

router.get("/my-events", eventController.admin)
router.get("/create", eventController.create)
// router.get("/", eventController.admin)

export default router