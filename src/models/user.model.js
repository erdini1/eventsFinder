import { DataTypes } from "sequelize";
import sequelize from "../config/db.config";

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
		confirm: {
			type: DataTypes.BOOLEAN
		}
	}
)

export default User