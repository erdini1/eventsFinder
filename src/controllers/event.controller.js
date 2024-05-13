const admin = (req, res) => {
	res.render("event/admin", {
		titlePage: "Mis eventos",
		navbar: true
	})
}

// Form to create a new event
const create = (req, res) => {
	res.render("event/create", {
		titlePage: "Crear evento",
		navbar: true
	})
}

export const eventController = {
	admin,
	create
}