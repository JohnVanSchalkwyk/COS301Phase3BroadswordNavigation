var request = require('request');

request.post(
    'http://127.0.0.1:5000/accept',
    { json: { start: 'Large chemistry hall', end: 'COS Tutorium' } },
    function (error, response, body) {
        if (!error && response.statusCode == 100) {
			console.log("\Route received (from start to end):\n");
			console.log("Start: "  + response.body.start);
			console.log("Middle: " + response.body.middle);
			console.log("End: " + response.body.end);
        }
    }
);
