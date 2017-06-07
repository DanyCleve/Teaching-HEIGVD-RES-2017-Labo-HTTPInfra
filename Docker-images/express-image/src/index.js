var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();


app.get('/', function (req, res) {
	res.send(generateLocation());
});

app.listen(3000, function () {
	console.log('Accepting HTTP requests on port 3000!');
});

function generateLocation(){
	var numberOfLocation = chance.integer({
		min: 5,
		max: 20
	});
	
	console.log(numberOfLocation);
	var locations = [];

	for(var i = 0; i < numberOfLocation; i++){

		var province = chance.province({full: true});

		var country = chance.country({country: 'fr', full: true}); // to return a full name
		
		var city = chance.city();

		var postal = chance.postal();

		var street = chance.street();

		
		locations.push({
			province: province,
			country: country,
			city: city,
			postal: postal,
			street : street
		});
	};
	console.log(locations);
	return locations;
}