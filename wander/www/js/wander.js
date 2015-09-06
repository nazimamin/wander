var wander = {
	answers: {
		"Waves": {
			"name": "Waves",
			"image": "img/thumb-surf.png",
<<<<<<< Updated upstream
			"tags": ['surfing', 'warm climate','beaches','physical activity']
=======
			"tags": ['warm climate', 'beaches', 'natural landscapes']
>>>>>>> Stashed changes
		},
		"Deserts": {
			"name": "Deserts",
			"image": "img/thumb-desert.png",
<<<<<<< Updated upstream
			"tags": ['warm climate','desert','nature']
=======
			"tags": ['warm climate', 'desert', 'natural landscapes']
>>>>>>> Stashed changes
		},
		"Snow": {
			"name": "Snow",
			"image": "",
			"tags": ['cold climate', 'snow', 'natural landscapes']
		},
		"Urban Views": {
			"name": "Urban Views",
			"image": "",
			"tags": ['urban atmosphere', 'architecture']
		},
		"Soft Beaches": {
			"name": "Soft Beaches",
			"image": "",
			"tags": ['beaches', 'warm climate']
		},
		"Hiking": {
			"name": "Hiking",
			"image": "",
			"tags": ['physical activity', 'natural landscapes']
		},
		"Street Food": {
			"name": "Street Food",
			"image": "",
			"tags": ['cuisine', 'unique culture']
		},
		"Local Music": {
			"name": "Local Music",
			"image": "",
			"tags": ['arts', 'unique culture', 'nightlife']
		},
		"Malls": {
			"name": "Malls",
			"image": "",
			"tags": ['urban atmosphere', 'shopping']
		},
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
destinations = wander.destinations;

function getResults(list) {
	results = {};
	resultsArray = [];
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
}