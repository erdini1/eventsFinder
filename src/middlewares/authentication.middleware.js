import { check, validationResult } from "express-validator"

// TODO: Implementar un ApiError
const validateRegister = async (req, res, next) => {
	await check("firstName").notEmpty().withMessage("El nombre no puede estar vacio").run(req)
	await check("lastName").notEmpty().withMessage("El apellido no puede estar vacio").run(req)
	await check("email").isEmail().withMessage("Debes ingresar un email valido").run(req)
	await check("password").isLength({ min: 6 }).withMessage("La contraseña debe contener al menos 6 caracteres").run(req)
	await check("repeatPassword").equals(req.body.password).withMessage("Las contraseñas no coinciden").run(req)
	const result = validationResult(req)

	req.errors = result.array()

	next()
}

const validateForgotPassword = async (req, res, next) => {
	await check("email").isEmail().withMessage("Debes ingresar un email valido").run(req)
	const result = validationResult(req)

	req.errors = result.array()

	next()
}

const validateResetPassword = async (req, res, next) => {
	await check("password").isLength({ min: 6 }).withMessage("La contraseña debe contener al menos 6 caracteres").run(req)
	await check("repeatPassword").equals(req.body.password).withMessage("Las contraseñas no coinciden").run(req)
	const result = validationResult(req)

	req.errors = result.array()

	next()
}

export const authenticationMiddleware = {
	validateRegister,
	validateForgotPassword,
	validateResetPassword
}