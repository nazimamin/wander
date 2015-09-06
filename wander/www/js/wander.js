var wander = {
	answers: {
		"Waves": {
			"name": "Waves",
			"image": "img/thumb-surf.png",
			"tags": ['surfing', 'warm climate']
		},
		"Deserts": {
			"name": "Deserts",
			"image": "img/thumb-desert.png",
			"tags": ['none']
		},
		"Snow": {
			"name": "Snow",
			"image": "",
			"tags": ['none']
		},
		"Unconventional": {
			"name": "Unconventional",
			"image": "",
			"tags": ['none']
		},
		"Beaches": {
			"name": "Beaches",
			"image": "",
			"tags": ['beaches', 'warm climate']
		},
		"Adventure": {
			"name": "Adventure",
			"image": "",
			"tags": ['beaches', 'warm climate']
		}
	},
	destinations: {
		'Paris, France': ['architecture', 'museum', 'unique cuisine'],
		'Agra, India': ['architecture', 'unique cuisine'],
		'Rome, Italy': ['architecture', 'mediterranean'],
		'Bangkok, Thailand': ['beaches'],
		'Catalonia, Spain': ['beaches'],
		'Tokyo, Japan': ['beaches'],
		'Hong Kong, China': ['beaches'],
		'The Caribbean': ['beaches'],
		'Peru': ['beaches'],
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