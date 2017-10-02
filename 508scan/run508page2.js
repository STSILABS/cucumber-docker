var pa11y = require('pa11y');

// Create a test instance with some default options
var test = pa11y({

	// Log what's happening to the console
	log: {
		debug: console.log.bind(console),
		error: console.error.bind(console),
		info: console.log.bind(console)
	},

	// Run some actions before the tests

	actions: [
		'click element #attNeededYes',
    'click element .button',
    'wait for url to not be https://teas.uspto.gov/forms/teasplus'
	]

});

// Test https://teas.uspto.gov/forms/teasplus
test.run('https://teas.uspto.gov/forms/teasplus', function(error, result) {
	if (error) {
		return console.error(error.message);
	}
	console.log(result);
});
