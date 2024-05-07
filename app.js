import express from "express"
import { BACKEND } from "./src/config/env-defaults.config.js"
import sequelize from "./src/config/db.config.js"
import indexRouter from "./src/routes/index.route.js"

const app = express()

// Habilitación de PUG (Template engine)
// Set permite habilitar configuraciones. Primero se coloca view engine y luego se especifica cual se va a usar
app.set("view engine", "pug")
app.set("views", "./src/views")

// Carpeta publica
app.use(express.static("src/public"))

app.use(express.urlencoded({ extended: true }))

try {
	await sequelize.authenticate()
	sequelize.sync()
	console.log("Connection has been established succesfully.")
} catch (error) {
	console.log("Unable to connect to the database", error)
}

app.use("/", indexRouter)

app.listen(BACKEND.PORT, () => {
	console.log(`Server running on port ${BACKEND.PORT}`)
})