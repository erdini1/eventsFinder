import transport from "../config/email.config.js"

const emailRegistration = async (userData) => {

	const { firstName, lastName, email, token } = userData

	await transport.sendMail({
		from: "EventFinder.com",
		to: email,
		subject: "Confirma tu cuenta en EventFinder",
		text: "Confirma tu cuenta en EventFinder",
		html: `
			<p>Hola ${firstName}, comprueba tu cuenta en EventFinder</p>

			<p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace: 
			<a href="">Confirmar cuenta</a> </p>

			<p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
		`
	})
}

export {
	emailRegistration
}
