import express from "express"
const router = express.Router()

router.get("/login", (req, res) => {
	// res.status(200).json({ msg: "Desde authentication route" })
	res.render("auth/login")
})

export default router