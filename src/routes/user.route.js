import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({ msg: "Ruta user route" })
})

export default router