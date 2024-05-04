import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";
import { hashPassword } from "../helpers/password.helpers.js";

const User = sequelize.define("User",
	{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		token: {
			type: DataTypes.STRING
		},
		confirmed: {
			type: DataTypes.BOOLEAN
		}
	}, {
	hooks: {
		beforeCreate: async function (user) {
			user.password = await hashPassword(user.password)
		}
	}
}
)

export default User