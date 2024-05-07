import User from "../models/user.model.js"

// TODO: Sacar los datavalues y poner DTO
/**
 * Function: getByEmail
 * Description: Retrieves a user from the database by their email address.
 * Parameters:
 *    - email: String representing the email address of the user to retrieve.
 * Returns:
 *    - Returns the data values of the user if found, otherwise returns null.
 */
const getByEmail = async (email) => {
	const user = await User.findOne({ where: { email } })
	return user?.dataValues
}

/**
 * Function: getByToken
 * Description: Retrieves a user from the database by their token.
 * Parameters:
 *   - token: String representing the token of the user to retrieve.
 * Returns:
 *  - Returns the data values of the user if found, otherwise returns null.
 */
const getByToken = async (token) => {
	const user = await User.findOne({ where: { token } })
	return user
}

/**
 * Function: create
 * Description: Creates a new user in the database.
 * Parameters:
 *  - userData: Object containing the data of the user to create.
 * Returns:
 * - Returns the data values of the user if created, otherwise returns null.
 */
const create = async (userData) => {
	const user = await User.create(userData)
	return user?.dataValues
}

const save = async (user) => {
	await user.save()
}

export const userRepository = {
	getByEmail,
	getByToken,
	create,
	save
}