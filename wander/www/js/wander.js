var idbAdapter = new lokiIndexedAdapter('loki');
var db = new loki('wander', {
	autoload: true,
	autoloadCallback: loadHandler,
	autosave: true,
	autosaveInterval: 10000,
	adapter: idbAdapter
});

function loadHandler() {
	var questions = db.getCollection('wander');
	if (questions === null) {
		questions = db.addCollection('wander');
	}
}

wander.insert({
	answers: {
		[{
			"id": 1,
			"name": "Waves",
			"image": "img/thumb-surf.png"
			"tags": ['surfing', 'warm climate']
		}, {
			"id": 2,
			"name": "Deserts",
			"image": "img/thumb-desert.png"
			"tags": ['none']
		}, {
			"id": 3,
			"name": "Adventure",
			"image": "img/thumb-touring.png"
			"tags": ['none']
		}, {
			"id": 4,
			"name": "Relaxation",
			"image": "img/thumb-canal.png"
			"tags": ['none']
		}, {
			"id": 5,
			"name": "Beaches",
			"image": "img/thumb-surf.png"
			"tags": ['beaches', 'warm climate']
		}, {
			"id": 6,
			"name": "Deserts",
			"image": "img/thumb-desert.png"
			"tags": ['none']
		}];

	},
	destinations: {
		'Cancun': ['beaches'],
		'Dankville': ['Weed']
	}
});

questionSet = db.collections[0].data[0].questions;
dataSet = db.collections[0].data[0].destinations;