import Category from "../models/category.model.js"

const getAll = async () => {
	const categories = await Category.findAll()
	return categories
}

export const categoryRepository = {
	getAll
}