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
		titlePage: "Crear Cuenta"
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

const forgotPassword = (req, res) => {
	console.log("forgot password desde Authentication controller")
}

export const authenticationController = {
	formLogin,
	formRegister,
	formForgotPassword,
	login,
	register,
	forgotPassword
}