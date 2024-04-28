const login = (req, res) => {
	res.render("auth/login", {
		autenticado: true
	})
}

export const authenticationController = {
	login
}