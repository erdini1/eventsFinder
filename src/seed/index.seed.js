import categories from "./category.seed.js";
import Category from "../models/category.model.js";
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

// argv posee un arreglo con el comando del script: node src/seed/index.seed.js -i
if (process.argv[2] === "-i") {
	importData()
}