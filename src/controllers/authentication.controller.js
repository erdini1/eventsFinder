// import { HTTP_STATUSES } from "../constants/http.constant.js"
import { userRepository } from "../repositories/user.repository.js"
import { hashPassword } from "../helpers/password.helpers.js"

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

	// TODo: HAcer commit de "Aplicando funcionalidad para evitar usuarios duplicados y se agrego el hasheo de password en la creación de usuarios"
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

	// const hashedPassword = await hashPassword(password)
	const newUser = await userRepository.create({ firstName, lastName, email, password, token: 123 })
	console.log(newUser)
}

const forgotPassword = (req, res) => {
	console.log("forgot password desde Authentication controller")
}

export const authenticationController = {
	login,
	register,
	forgotPassword
}