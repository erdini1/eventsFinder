import { userRepository } from "../repositories/user.repository.js"
import { generateToken } from "../helpers/token.helper.js"
import { emailRegistration } from "../helpers/email-schema.helper.js"

// TODO: Ver como pasar toda la logica al service
// FORMS
const formLogin = (req, res) => {
	res.render("auth/login", {
		titlePage: "Iniciar Sesión"
	})
}

const formRegister = (req, res) => {
	res.render("auth/register", {
		titlePage: "Crear Cuenta",
		csrfToken: req.csrfToken()
	})
}

const formForgotPassword = (req, res) => {
	res.render("auth/forgot-password", {
		titlePage: "Recupera tu acceso"
	})
}

// CONTROLLERS
const login = (req, res) => {
	console.log("Login desde Authentication controller")
}

const register = async (req, res) => {
	const errors = req.errors
	const { firstName, lastName, email, password } = req.body

	if (errors.length) {
		return res.render("auth/register", {
			titlePage: "Crear Cuenta",
			csrfToken: req.csrfToken(),
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
			csrfToken: req.csrfToken(),
			errors: [{ msg: "El usuario ya se encuentra registrado" }],
			firstName,
			lastName,
			email
		})
	}

	const newUser = await userRepository.create({
		firstName,
		lastName,
		email,
		password,
		token: generateToken()
	})

	await emailRegistration({
		firstName: newUser.firstName,
		lastName: newUser.lastName,
		email: newUser.email,
		token: newUser.token
	})

	return res.render("templates/message", {
		titlePage: "Cuenta creada correctamente",
		message: "Cuenta creada con exito, revisa tu email para confirmar"
	})
}

const confirmation = async (req, res) => {
	const { token } = req.params
	const user = await userRepository.getByToken(token)
	if (!user) {
		return res.render("auth/confirm-account", {
			titlePage: "Error al confirmar tu cuenta",
			message: "Hubo un error al confirmar tu cuenta, intenta de nuevo",
			error: true
		})
	}

	user.token = null
	user.confirmed = true
	await userRepository.save(user)

	return res.render("auth/confirm-account", {
		titlePage: "Cuenta confirmada con exito",
		message: "Cuenta confirmada correctamente, puedes iniciar sesión",
		error: false
	})

}

const forgotPassword = (req, res) => {
	console.log("forgot password desde Authentication controller")
}

export const authenticationController = {
	formLogin,
	formRegister,
	formForgotPassword,
	login,
	register,
	confirmation,
	forgotPassword,
}