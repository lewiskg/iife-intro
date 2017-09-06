var SolarSystem = (function(oldSolarSystem){
	const spaceCrafts = ["mercury","voyager","challenger","apollo","spunknik","mars rover","enterpirse","millennium falcon"];

	oldSolarSystem.getSpacecrafts = function() {
		return spaceCrafts;
	//	console.log("space crafts", spaceCrafts);
	};

	oldSolarSystem.setSpaceCraft = function(newSpaceCraft) {
		spaceCrafts.push(newSpaceCraft);
	}

	oldSolarSystem.wreckSpaceCraft = function() {
		spaceCrafts.pop();
	}

	return oldSolarSystem;
})(SolarSystem || {});
