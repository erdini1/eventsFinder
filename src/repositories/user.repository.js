import User from "../models/user.model.js"

const getByEmail = async (userEmail) => {
	const user = await User.findOne({ where: { email: userEmail } })
	return user?.dataValues
}

const create = async (userData) => {
	const user = await User.create(userData)
	return user?.dataValues
}

export const userRepository = {
	getByEmail,
	create
}