import categories from "./category.seed.js";
import { Category } from "../models/index.model.js";
import sequelize from "../config/db.config.js";

const importData = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		await Category.bulkCreate(categories)
		console.log("Datos importados correctamente")
		process.exit()

	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

const deleteData = async () => {
	try {
		// Esto no elimina la tabla de usuarios xq no estoy importando el modelo. Si lo hiciera se borraria
		await sequelize.sync({ force: true })
		console.log("Tablas eliminadas correctamente")
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

// argv posee un arreglo con el comando del script: node src/seed/index.seed.js -i
if (process.argv[2] === "-i") {
	importData()
}

if (process.argv[2] === "-d") {
	deleteData()
}