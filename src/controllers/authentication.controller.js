import User from "../models/user.model.js"

const login = (req, res) => {
	console.log("Login desde Authentication controller")
}

// Pasar a Service
const register = async (req, res) => {
	const { firstName, lastName, email, password } = req.body
	console.log("register desde Authentication controller")
	const user = await User.create({
		firstName,
		lastName,
		email,
		password
	})
	res.status(200).json(user)
}

const forgotPassword = (req, res) => {
	console.log("forgot password desde Authentication controller")
}

export const authenticationController = {
	login,
	register,
	forgotPassword
}