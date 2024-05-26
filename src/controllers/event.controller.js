import { categoryRepository } from "../repositories/category.repository.js"

const admin = (req, res) => {
	res.render("event/admin", {
		titlePage: "Mis eventos",
		navbar: true
	})
}

// Form to create a new event
const create = async (req, res) => {

	// Obteniendo datos de la categoria
	const categories = await categoryRepository.getAll()

	res.render("event/create", {
		titlePage: "Crear evento",
		navbar: true,
		categories
	})
}

export const eventController = {
	admin,
	create
}