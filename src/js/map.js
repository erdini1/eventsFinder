(function () {
	// -53.7872861,-67.7001535 - Rio Grande

	const lat = -53.7872861;
	const lng = -67.7001535;
	const map = L.map('map').setView([lat, lng], 14);
	let marker

	// Utilizar Provider y Geocoder
	const geocodeService = L.esri.Geocoding.geocodeService()


	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	// Pin
	marker = new L.marker([lat, lng], {
		draggable: true,
		autoPan: true
	}).addTo(map)

	// Detectar el movimiento del pin
	marker.on("moveend", function (e) {
		marker = e.target
		const position = marker.getLatLng()
		map.panTo(new L.LatLng(position.lat, position.lng))

		// Obtener información de las calles al soltar el pin
		geocodeService.reverse().latlng(position, 13).run(function (err, result) {

			marker.bindPopup(result.address.LongLabel)

			// llenando los campos
			document.querySelector(".street").textContent = result.address?.Address ?? ""
			document.querySelector("#street").value = result.address?.Address ?? ""
			document.querySelector("#lat").value = result.latlng?.lat ?? ""
			document.querySelector("#lng").value = result.latlng?.lng ?? ""
		})

	})

})()