var SolarSystem = (function(oldSolarSystem){
	const stars = ["Sun","Proxima Centauri","Rigil Kentaurus","Wolf 359","Sirius A","Sirius B","Procyon A","Procyon B"];

	oldSolarSystem.getStars = function() {
		return stars;
	//	console.log("space crafts", spaceCrafts);
	};

	oldSolarSystem.setStar = function(newStar) {
		stars.push(newStar);
	}

	oldSolarSystem.supernovaTheStar = function() {
		stars.pop();
	}

	return oldSolarSystem;
})(SolarSystem || {});
