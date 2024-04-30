import express from "express"
import "dotenv/config"
import indexRouter from "./src/routes/index.route.js"

const app = express()

// Habilitación de PUG (Template engine)
// Set permite habilitar configuraciones. Primero se coloca view engine y luego se especifica cual se va a usar
app.set("view engine", "pug")
app.set("views", "./src/views")

// Carpeta publica
app.use(express.static("src/public"))

app.use("/api", indexRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})