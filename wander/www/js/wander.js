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
			"image": "img/cities/paris.jpg",
			"tags": ['architecture', 'museums', 'unique culture']
		},
		'Agra, India': {
			"image": "img/cities/agra.jpg",
			"tags": ['architecture', 'unique culture']
		},
		'Rome, Italy': {
			"image": "img/cities/rome.jpg",
			"tags": ['architecture', 'unique culture', 'cuisine']
		},
		'Karachi, Pakistan': {
			"image": "img/cities/karachi.jpg",
			"tags": ['hot climate']
		},
		'Bangkok, Thailand': {
			"image": "img/cities/bangkok.jpg",
			"tags": ['hot climate', 'urban atmosphere']
		},
		'Catalonia, Spain': {
			"image": "img/cities/catalonia.jpg",
			"tags": ['beaches']
		},
		'Guangzhou, China': {
			"image": "img/cities/guangzhou.jpg",
			"tags": ['beaches']
		},
		'Lagos, Nigeria': {
			"image": "img/cities/lagos.jpg",
			"tags": ['unique culture']
		},
		'Tokyo, Japan': {
			"image": "img/cities/tokyo.jpg",
			"tags": ['unique culture', 'architecture']
		},
		'Shanghai, China': {
			"image": "img/cities/shanghai.jpg",
			"tags": ['urban atmosphere']
		},
		'Mumbai, India': {
			"image": "img/cities/mumbai.jpg",
			"tags": ['hot climate']
		},
		'Istanbul, Turkey': {
			"image": "img/cities/istanbul.jpg",
			"tags": ['hot climate']
		},
		'Dhaka, Bangladesh': {
			"image": "img/cities/dhaka.jpg",
			"tags": ['hot climate']
		},
		'Lahore, Pakistan': {
			"image": "img/cities/lahore.jpg",
			"tags": ['hot climate']
		},
		'Lima, Peru': {
			"image": "img/cities/lima.jpg",
			"tags": ['beaches']
		},
		'Mexico City, Mexico': {
			"image": "img/cities/mexicocity.jpg",
			"tags": ['unique culture', 'architecture']
		},
		'Kinshasa, Democratic Republic of the Congo': {
			"image": "img/cities/kinshasa.jpg",
			"tags": ['beaches', 'unique culture']
		},
		'Jakarta, Indonesia': {
			"image": "img/cities/jakarta.jpg",
			"tags": ['beaches']
		},
		'Sao Paulo, Brazil': {
			"image": "img/cities/saopaulo.jpg",
			"tags": ['beaches', 'natural landscapes']
		},
		'Seoul, South Korea': {
			"image": "img/cities/seoul.jpg",
			"tags": ['urban atmosphere']
		},
		'Shenzhen, China': {
			"image": "img/cities/shenzhen.jpg",
			"tags": ['urban atmosphere']
		},
		'London, United Kingdom': {
			"image": "img/cities/london.jpg",
			"tags": ['sophistication', 'urban atmosphere']
		},
		'Cairo, Egypt': {
			"image": "img/cities/cairo.jpg",
			"tags": ['hot climate']
		},
		'Moscow, Russia': {
			"image": "img/cities/moscow.jpg",
			"tags": ['cold climate', 'snow']
		},
		'Beijing, China': {
			"image": "img/cities/beijing.jpg",
			"tags": ['architecture', 'unique culture']
		},
		'Bangalore, India': {
			"image": "img/cities/bangalore.jpg",
			"tags": ['beaches']
		},
		'Hanoi, Vietnam': {
			"image": "img/cities/hanoi.jpg",
			"tags": ['cuisine', 'urban atmosphere', 'warm climate', 'natural landscapes']
		},
		'Penang, Malaysia': {
			"image": "img/cities/penang.jpg",
			"tags": ['cuisine']
		},
		'Singapore, Singapore': {
			"image": "img/cities/singapore.jpg",
			"tags": ['beaches']
		},
		'Amsterdam, Netherlands': {
			"image": "img/cities/amsterdam.jpg",
			"tags": ['recreation', 'nightlife']
		},
		'New York City, United States': {
			"image": "img/cities/newyork.jpg",
			"tags": ['nightlife', 'urban atmosphere', 'sophistication']
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

function getFlight(cityname) {
    var modified = cityname.replace(' ', '');
    var cities = {
        "Paris,France": "629",
        "Agra,India": "1415",
        "Rome,Italy": "661",
        "Karachi,Pakistan": "1349",
        "Bangkok,Thailand": "958",
        "Catalonia,Spain": "634",
        "Guangzhou,China": "829",
        "Lagos,Nigeria": "849",
        "Tokyo,Japan": "829",
        "Mumbai,India": "940",
        "Instanbul,Turkey": "876",
        "Dhaka,Bangladesh": "1137",
        "Lahore,Pakistan": "1089",
        "Lima,Peru": "653",
        "MexicoCity,Mexico": "322",
        "Kinshasa,DemocraticRepublicoftheCongo": "1456",
        "Jakarta,Indonesia": "946",
        "SaoPaulo,Brazil": "955",
        "Seoul,SouthKorea": "879",
        "Shenzhen,China": "1048",
        "London,UnitedKingdom": "664",
        "Cairo,Egypt": "809",
        "Moscow,Russia": "608",
        "Beijing,China": "807",
        "Bangalore,India": "928",
        "Hanoi,Vietnam": "1304",
        "Penang,Malaysia": "1410",
        "Singapore,Singapore": "958",
        "Amsterdam,Netherlands": "752",
        "NewYorkCity,UnitedStates": "205"
    };
    return '$' + cities[modified];
}