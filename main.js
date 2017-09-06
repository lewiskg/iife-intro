// console.log("in main.js");

// let Something = (function(oldSomething) {
// 	const animals = ["cat","dog"];
// 	oldSomthing.niceFunction = function() {
// 		console.log("I'm a nice function");
// 	}
// 	return oldSomthing;

// })(Something || {});


var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];
	const spaceCrafts = ["mercury","voyager","challenger","apollo","spunknik","mars rover","enterpirse","millennium falcon"];

	oldSolarSystem.getPlanets = function() {
		return planets;
	//	console.log("planets", planets);
	};

	oldSolarSystem.setPlanet = function(newPlanet) {
		planets.push(newPlanet);
	}

	oldSolarSystem.getSpaceCrafts = function() {
		return spaceCrafts;
	//	console.log("space crafts", spaceCrafts);
	};

	oldSolarSystem.setSpaceCraft = function(newSpaceCraft) {
		spaceCrafts.push(newSpaceCraft);
	}

	return oldSolarSystem;
})(SolarSystem || {});

let myPlanets = SolarSystem.getPlanets();
console.log("myPlanets" , myPlanets);
