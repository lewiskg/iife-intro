var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];

	oldSolarSystem.getPlanets = function() {
		return planets;
	//	console.log("planets", planets);
	};

	oldSolarSystem.setPlanet = function(newPlanet) {
		planets.push(newPlanet);
	}

	return oldSolarSystem;
})(SolarSystem || {});
