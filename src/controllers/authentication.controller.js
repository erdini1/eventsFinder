const login = (req, res) => {
	console.log("Login desde Authentication controller")
}

const register = (req, res) => {
	console.log(req)
	console.log("register desde Authentication controller")
}

const forgotPassword = (req, res) => {
	console.log("forgot password desde Authentication controller")
}

export const authenticationController = {
	login,
	register,
	forgotPassword
}