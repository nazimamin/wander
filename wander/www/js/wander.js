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
		'Paris, France': {
			"image": "",
			"tags": ['architecture', 'museum', 'unique cuisine']
		},
		'Agra, India': {
			"image": "",
			"tags": ['architecture', 'unique cuisine']
		},
		'Rome, Italy': {
			"image": "",
			"tags": ['architecture', 'mediterranean']
		},
		'Karachi, Pakistan': {
			"image": "",
			"tags": ['architecture', 'mediterranean']
		},
		'Rome, Italy': {
			"image": "",
			"tags": ['architecture', 'mediterranean']
		},
		'Bangkok, Thailand': {
			"image": "",
			"tags": ['beaches']
		},
		'Catalonia, Spain': {
			"image": "",
			"tags": ['beaches']
		},
		'Guangzhou, China': {
			"image": "",
			"tags": ['beaches']
		},
		'Lagos, Nigeria': {
			"image": "",
			"tags": ['beaches']
		},
		'Tokyo, Japan': {
			"image": "",
			"tags": ['beaches']
		},
		'Shanghai, China': {
			"image": "",
			"tags": ['beaches']
		},
		'Mumbai, India': {
			"image": "",
			"tags": ['beaches']
		},
		'Instanbul, Turkey': {
			"image": "",
			"tags": ['beaches']
		},
		'Dhaka, Bangladesh': {
			"image": "",
			"tags": ['beaches']
		},
		'Lahore, Pakistan': {
			"tags": ['beaches']
		},
		'Lima, Peru': {
			"image": "",
			"tags": ['beaches']
		},
		'Mexico City, Mexico': {
			"image": "",
			"tags": ['beaches']
		},
		'Kinshasa, Democratic Republic of the Congo': {
			"image": "",
			"tags":  ['beaches']
		},
		'Jakarta, Indonesia': {
			"image": "",
			"tags":  ['beaches']
		},
		'Sao Paulo, Brazil': {
			"image": "",
			"tags":  ['beaches']
		},
		'Dongguan, China': {
			"image": "",
			"tags":  ['beaches']
		},
		'Seoul, South Korea': {
			"image": "",
			"tags":  ['beaches']
		},
		'Shenzhen, China': {
			"image": "",
			"tags":  ['beaches']
		},
		'London, United Kingdom': {
			"image": "",
			"tags":  ['beaches']
		},
		'Cairo, Egypt': {
			"image": "",
			"tags":  ['beaches']
		},
		'Moscow, Russia': {
			"image": "",
			"tags":  ['beaches']
		},
		'Beijing, China': {
			"image": "",
			"tags":  ['beaches']
		},
		'The Caribbean': {
			"image": "",
			"tags":  ['beaches']
		},
		'Bengaluru, India': {
			"image": "",
			"tags":  ['beaches']
		},
		'Hanoi, Vietnam': {
			"image": "",
			"tags":  ['beaches']
		},
		'Penang, Malaysia': {
			"image": "",
			"tags":  ['cuisine']
		},
		'Singapore': {
			"image": "",
			"tags":  ['beaches']
		},
		'Amsterdam, the Netherlands': {
			"image": "",
			"tags":  ['recreation', 'nightlife']
		},
		'New York City, United States': {
			"image": "",
			"tags":  ['nightlife']
		}
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
	//try {
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
		rCount = [];
		for (v in results) {
			rCount[v] = [];
			rCount[v].push(results[v][0]);
			rCount[v].push(results[v].length);
		}
		sorted = [];
		sortedNew = [];
		for (i in rCount)
			sorted.push([i, rCount[i][0]])
		sorted.sort(function(a, b) {
			return a[1] - b[1]
		})
		for (i in sorted) {
			sortedNew.push(sorted[i][0])
		}
		return sorted;
	//} catch (e) {
		return "You fucked up."
	//}
}