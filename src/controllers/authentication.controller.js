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

export const authenticationController = {
	login,
	register
}