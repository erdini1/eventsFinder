const login = (req, res) => {
	res.render("auth/login", {

	})
}

const register = (req, res) => {
	res.render("auth/register", {

	})
}

export const authenticationController = {
	login,
	register
}