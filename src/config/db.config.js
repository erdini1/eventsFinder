import Sequelize from "sequelize"
import { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } from "./env-defaults.config.js"

const sequelize = new Sequelize(
	DB_DATABASE,
	DB_USERNAME,
	DB_PASSWORD,
	{
		host: DB_HOST,
		port: DB_PORT,
		dialect: "mysql",
		define: {
			timestamps: true
		},
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		},
		operatorAliases: false
	}
)

export default sequelize