const admin = (req, res) => {
	res.render("event/admin", {
		titlePage: "Mis eventos",
		navbar: true
	})
}

export const eventController = {
	admin
}