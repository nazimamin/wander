var wander = {
	answers: {
		"Surfing": {
			"name": "Surfing",
			"image": "img/attributes/thumb-surf.jpg",
			"tags": ['warm climate', 'beaches', 'physical activity', 'natural landscapes']
		},
		"Deserts": {
			"name": "Deserts",
			"image": "img/attributes/thumb-desert.jpg",
			"tags": ['warm climate', 'desert', 'natural landscapes']
		},
		"Snow": {
			"name": "Snow",
			"image": "img/attributes/thumb-snow.jpg",
			"tags": ['cold climate', 'snow', 'natural landscapes']
		},
		"Urban Views": {
			"name": "Urban Views",
			"image": "img/attributes/thumb-urban.jpg",
			"tags": ['urban atmosphere', 'architecture']
		},
		"Soft Beaches": {
			"name": "Soft Beaches",
			"image": "img/attributes/thumb-beach.jpg",
			"tags": ['beaches', 'warm climate']
		},
		"Hiking": {
			"name": "Hiking",
			"image": "img/attributes/thumb-hiking.jpg",
			"tags": ['physical activity', 'mountains', 'natural landscapes']
		},
		"Street Food": {
			"name": "Street Food",
			"image": "img/attributes/thumb-streetfood.jpg",
			"tags": ['cuisine', 'unique culture']
		},
		"Fine Dining": {
			"name": "Fine Dining",
			"image": "img/attributes/thumb-finedining.jpg",
			"tags": ['cuisine', 'sophistication']
		},
		"Local Music": {
			"name": "Local Music",
			"image": "img/attributes/thumb-music.jpg",
			"tags": ['arts', 'unique culture', 'nightlife']
		},
		"Malls": {
			"name": "Malls",
			"image": "img/attributes/thumb-malls.jpg",
			"tags": ['urban atmosphere', 'shopping', 'sophistication']
		},
		"Historical Monuments": {
			"name": "Historical Monuments",
			"image": "img/attributes/thumb-monuments.jpg",
			"tags": ['unique culture', 'architecture']
		},
		"Sunny Weather": {
			"name": "Sunny Weather",
			"image": "img/attributes/thumb-sunshine.jpg",
			"tags": ['warm climate', 'sunshine']
		},
		"Quaint Coffee Shops": {
			"name": "Quaint Coffee Shops",
			"image": "img/attributes/thumb-coffee.jpg",
			"tags": ['cuisine', 'urban atmosphere', 'unique culture']
		},
		"Art Museums": {
			"name": "Art Museums",
			"image": "img/attributes/thumb-arts.jpg",
			"tags": ['unique culture', 'museums', 'arts', 'sophistication']
		}
	},
	destinations: {
		'Paris, France': ['architecture', 'museum', 'unique cuisine'],
		'Agra, India': ['architecture', 'unique cuisine'],
		'Rome, Italy': ['architecture', 'mediterranean'],
		'Karachi, Pakistan': ['architecture', 'mediterranean'],
		'Rome, Italy': ['architecture', 'mediterranean'],
		'Bangkok, Thailand': ['beaches'],
		'Catalonia, Spain': ['beaches'],
		'Guangzhou, China': ['beaches'],
		'Lagos, Nigeria': ['beaches'],
		'Tokyo, Japan': ['beaches'],
		'Shanghai, China': ['beaches'],
		'Mumbai, India': ['beaches'],
		'Instanbul, Turkey': ['beaches'],
		'Dhaka, Bangladesh': ['beaches'],
		'Lahore, Pakistan': ['beaches'],
		'Lima, Peru': ['beaches'],
		'Mexico City, Mexico': ['beaches'],
		'Kinshasa, Democratic Republic of the Congo': ['beaches'],
		'Jakarta, Indonesia': ['beaches'],
		'Sao Paulo, Brazil': ['beaches'],
		'Dongguan, China': ['beaches'],
		'Seoul, South Korea': ['beaches'],
		'Shenzhen, China': ['beaches'],
		'London, United Kingdom': ['beaches'],
		'Cairo, Egypt': ['beaches'],
		'Moscow, Russia': ['beaches'],
		'Beijing, China': ['beaches'],
		'The Caribbean': ['beaches'],
		'Bengaluru, India': ['beaches'],
		'Hanoi, Vietnam': ['beaches'],
		'Penang, Malaysia': ['cuisine'],
		'Singapore': ['beaches'],
		'Amsterdam, the Netherlands': ['recreation', 'nightlife'],
		'New York City, United States': ['nightlife']
	}
};

answers = wander.answers;
answersObject = function()	{
	var a = [];
	Object.keys(answers).forEach(function(key) {
		a.push(answers[key]);
	});
	return a;
}();
destinations = wander.destinations;

function getResults(list) {
	results = {};
	resultsArray = [];
	try {
		for (i in list) { // list[i] =
			for (z in answers[list[i]]['tags']) { // list[i]['tags'][z] = tag value
				for (j in destinations) { // destinations[j] = 'Destination City'
					for (k in destinations[j]) { // destinations[j][k] = 'tag value'
						if (answers[list[i]]['tags'][z].indexOf(destinations[j][k]) > -1) {
							if (typeof results[j] === "undefined") {
								results[j] = [];
							}
							results[j].push(destinations[j][k]);
						}
					}
				}
			}
		}
		//return results;
		rCount = {};
		Object.keys(results).forEach(function(key) {
			rCount[key] = [];
			rCount[key] = results[key].length
		})
		sorted = [];
		sortedNew = [];
		for (i in rCount)
			sorted.push([i, rCount[i]])
		sorted.sort(function(a, b) {
			return a[1] - b[1]
		})
		for (i in sorted) {
			sortedNew.push(sorted[i][0])
		}
		return {
			results, sortedNew
		}
	} catch (e) {
		return "You fucked up."
	}
}