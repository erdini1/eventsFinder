import { userRepository } from "../repositories/user.repository.js"
import { generateToken } from "../helpers/token.helper.js"

const login = (req, res) => {
	console.log("Login desde Authentication controller")
}

// TODO: Ver como pasar toda la logica al service
const register = async (req, res) => {
	const errors = req.errors
	const { firstName, lastName, email, password } = req.body

	if (errors.length) {
		return res.render("auth/register", {
			titlePage: "Crear Cuenta",
			errors,
			firstName,
			lastName,
			email
		})
	}

	const user = await userRepository.getByEmail(email)

	if (user) {
		return res.render("auth/register", {
			titlePage: "Crear Cuenta",
			errors: [{ msg: "El usuario ya se encuentra registrado" }],
			firstName,
			lastName,
			email
		})
	}

	await userRepository.create({ firstName, lastName, email, password, token: generateToken() })

	return res.render("templates/message", {
		titlePage: "Cuenta creada correctamente",
		message: "Cuenta creada con exito, revisa tu email para confirmar"
	})
}

const forgotPassword = (req, res) => {
	console.log("forgot password desde Authentication controller")
}

export const authenticationController = {
	login,
	register,
	forgotPassword
}