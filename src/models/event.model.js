import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Event = sequelize.define("Event",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		price: {
			type: DataTypes.DECIMAL(10, 2) // Ver este campo
		},
		eventDate: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		eventTime: {
			type: DataTypes.TIME,
			allowNull: false
		},
		street: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lat: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lng: {
			type: DataTypes.STRING,
			allowNull: false
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false
		},
		published: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	}
)

export default Event
