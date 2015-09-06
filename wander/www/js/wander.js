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
			"image": "sample.jpg",
			"tags": ['architecture', 'museum', 'unique cuisine']
		},
		'Agra, India': {
			"image": "sample.jpg",
			"tags": ['architecture', 'unique cuisine']
		},
		'Rome, Italy': {
			"image": "sample.jpg",
			"tags": ['architecture', 'mediterranean']
		},
		'Karachi, Pakistan': {
			"image": "sample.jpg",
			"tags": ['architecture', 'mediterranean']
		},
		'Rome, Italy': {
			"image": "sample.jpg",
			"tags": ['architecture', 'mediterranean']
		},
		'Bangkok, Thailand': {
			"image": "sample.jpg",
			"tags": ['beaches']
		},
		'Catalonia, Spain': {
			"image": "sample.jpg",
			"tags": ['beaches']
		},
		'Guangzhou, China': {
			"image": "sample.jpg",
			"tags": ['beaches']
		},
		'Lagos, Nigeria': {
			"image": "sample.jpg",
			"tags": ['beaches']
		},
		'Tokyo, Japan': {
			"image": "sample.jpg",
			"tags": ['beaches']
		},
		'Shanghai, China': {
			"image": "sample.jpg",
			"tags": ['beaches']
		},
		'Mumbai, India': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Instanbul, Turkey': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Dhaka, Bangladesh': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Lahore, Pakistan': {
			"tags": ['beaches', 'fresh memes']
		},
		'Lima, Peru': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Mexico City, Mexico': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Kinshasa, Democratic Republic of the Congo': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Jakarta, Indonesia': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Sao Paulo, Brazil': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Dongguan, China': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Seoul, South Korea': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Shenzhen, China': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'London, United Kingdom': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Cairo, Egypt': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Moscow, Russia': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Beijing, China': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'The Caribbean': {
			"image": "sample.jpg",
			"tags": ['beaches', 'fresh memes']
		},
		'Bengaluru, India': {
			"image": "sample.jpg",
			"tags": ['beaches']
		},
		'Hanoi, Vietnam': {
			"image": "sample.jpg",
			"tags": ['beaches']
		},
		'Penang, Malaysia': {
			"image": "sample.jpg",
			"tags": ['cuisine']
		},
		'Singapore': {
			"image": "sample.jpg",
			"tags": ['beaches']
		},
		'Amsterdam, the Netherlands': {
			"image": "sample.jpg",
			"tags": ['recreation', 'nightlife']
		},
		'New York City, United States': {
			"image": "sample.jpg",
			"tags": ['nightlife']
		}
	}
};

answers = wander.answers;
answersObject = function() {
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
				for (k in destinations[j]['tags']) { // destinations[j][k] = 'tag value'
					if (answers[list[i]]['tags'][z].indexOf(destinations[j]['tags'][k]) > -1) {
						if (typeof results[j] === "undefined") {
							results[j] = [];
						}
						results[j].push(destinations[j]['image']);
						results[j].push(destinations[j]['tags']);
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
		rCount[v].push(results[v][1]);
	}
	sorted = [];
	for (i in rCount) {
		sorted.push([i, rCount[i][0], rCount[i][1]])
	}
	sorted.sort(function(a, b) {
		return a[1] - b[1]
	})
	return sorted;
	//} catch (e) {
	return "You fucked up."
		//}
}