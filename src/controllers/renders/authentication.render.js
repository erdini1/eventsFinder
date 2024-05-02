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

export const authenticationRender = {
	formLogin,
	formRegister,
	formForgotPassword
}