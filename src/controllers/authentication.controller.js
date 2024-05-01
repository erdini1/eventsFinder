const login = (req, res) => {
	res.render("auth/login", {
		titlePage: "Iniciar Sesión"
	})
}

const register = (req, res) => {
	res.render("auth/register", {
		titlePage: "Crear Cuenta"
	})
}

const forgotPassword = (req, res) => {
	res.render("auth/forgot-password", {
		titlePage: "Recupera tu acceso"
	})
}

export const authenticationController = {
	login,
	register,
	forgotPassword
}