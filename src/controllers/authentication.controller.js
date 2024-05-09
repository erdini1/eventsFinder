import { userRepository } from "../repositories/user.repository.js"
import { generateToken } from "../helpers/token.helper.js"
import { emailRegistration, emailForgotPassword } from "../helpers/email-schema.helper.js"
import { hashPassword } from "../helpers/password.helpers.js"

// TODO: Ver como pasar toda la logica al service
const formLogin = (req, res) => {
	res.render("auth/login", {
		titlePage: "Iniciar Sesión"
	})
}

const login = (req, res) => {
	console.log("Login desde Authentication controller")
}

const formRegister = (req, res) => {
	res.render("auth/register", {
		titlePage: "Crear Cuenta",
		csrfToken: req.csrfToken()
	})
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

const formForgotPassword = (req, res) => {
	res.render("auth/forgot-password", {
		titlePage: "Recupera tu acceso",
		csrfToken: req.csrfToken()
	})
}

const forgotPassword = async (req, res) => {
	const errors = req.errors

	if (errors.length) {
		return res.render("auth/forgot-password", {
			titlePage: "Recupera tu acceso",
			csrfToken: req.csrfToken(),
			errors,
		})
	}

	const { email } = req.body

	const user = await userRepository.getByEmail(email)
	if (!user) {
		return res.render("auth/forgot-password", {
			titlePage: "Recupera tu acceso",
			csrfToken: req.csrfToken(),
			errors: [{ msg: "El email no pertenece a ningun usuario" }],
		})
	}

	user.token = generateToken()
	await userRepository.save(user)


	// Send email to user with token to reset password
	await emailForgotPassword({
		firstName: user.firstName,
		email: user.email,
		token: user.token
	})

	return res.render("templates/message", {
		titlePage: "Reestablece tu contraseña",
		message: "Revisa tu email y sigue los pasos para reestablecer tu contraseña"
	})

}

const formRecoverAccess = async (req, res) => {
	const { token } = req.params
	const user = await userRepository.getByToken(token)
	if (!user) {
		return res.render("auth/confirm-account", {
			titlePage: "Reestablece tu password",
			message: "Hubo un error al validar tu información, intenta de nuevo",
			error: true
		})
	}

	res.render("auth/reset-password", {
		titlePage: "Recupera tu acceso",
		csrfToken: req.csrfToken()
	})
}

const recoverAccess = async (req, res) => {
	const { token } = req.params
	const { password } = req.body

	const errors = req.errors
	if (errors.length) {
		return res.render("auth/reset-password", {
			titlePage: "Reestablece tu contraseña",
			csrfToken: req.csrfToken(),
			errors,
		})
	}

	const user = await userRepository.getByToken(token)
	if (!user) {
		return res.render("auth/reset-password", {
			titlePage: "Reestablece tu contraseña",
			csrfToken: req.csrfToken(),
			errors
		})
	}

	user.password = await hashPassword(password)
	user.token = null
	await userRepository.save(user)

	return res.render("auth/confirm-account", {
		titlePage: "Contraseña actualizada con exito",
		csrfToken: req.csrfToken(),
		message: "Contraseña actualizada correctamente, puedes iniciar sesión",
		error: false
	})
}

export const authenticationController = {
	formLogin,
	formRegister,
	formForgotPassword,
	login,
	register,
	confirmation,
	forgotPassword,
	formRecoverAccess,
	recoverAccess
}