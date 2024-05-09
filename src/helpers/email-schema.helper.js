import transport from "../config/email.config.js"
import { BACKEND } from "../config/env-defaults.config.js"

const emailRegistration = async (userData) => {

	const { firstName, email, token } = userData

	await transport.sendMail({
		from: "EventFinder.com",
		to: email,
		subject: "Confirma tu cuenta en EventFinder",
		text: "Confirma tu cuenta en EventFinder",
		html: `
			<p>Hola ${firstName}, comprueba tu cuenta en EventFinder</p>

			<p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace: 
			<a href="${BACKEND.URL}:${BACKEND.PORT}/auth/confirmation/${token}">Confirmar cuenta</a> </p>

			<p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
		`
	})
}

const emailForgotPassword = async (userData) => {

	const { firstName, email, token } = userData

	await transport.sendMail({
		from: "EventFinder.com",
		to: email,
		subject: "Reestablece tu contraseña en EventFinder",
		text: "Reestablece tu contraseña en EventFinder",
		html: `
			<p>Hola ${firstName}, solicitaste reestablecer tu contraseña en EventFinder</p>

			<p>Accede al siguiete enlace para cambiar tu contraseña: 
			<a href="${BACKEND.URL}:${BACKEND.PORT}/auth/forgot-password/${token}">Reestablecer contraseña</a> </p>

			<p>Si tu no solicitaste cambiar tu contraseña, puedes ignorar el mensaje</p>
		`
	})
}

export {
	emailRegistration,
	emailForgotPassword
}
