const admin = (req, res) => {
	res.render("event/admin", {
		titlePage: "Mis eventos",
	})
}

export const eventController = {
	admin
}