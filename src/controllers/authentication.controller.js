import { HTTP_STATUSES } from "../constants/http.constant.js"
import User from "../models/user.model.js"

const login = (req, res) => {
	console.log("Login desde Authentication controller")
}

// TODO: Pasar toda la logia al service
const register = async (req, res) => {
	const errors = req.errors
	const { firstName, lastName, email, password } = req.body

	// TODO: HAcer commit "Agregando validaciones al formulario de registo"
	if (errors.length != 0) {
		console.log(errors)
		return res.render("auth/register", {
			titlePage: "Crear Cuenta",
			errors
		})
	}

	const user = await User.create({
		firstName,
		lastName,
		email,
		password
	})
	console.log(errors)

}

const forgotPassword = (req, res) => {
	console.log("forgot password desde Authentication controller")
}

export const authenticationController = {
	login,
	register,
	forgotPassword
}