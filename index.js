
var pCLI = require('./playercli');
var fCLI = require('./framecli');

var FRAME_NUMER_OF_PINS = 10;
var LAST_FRAME_NUMBER   = 10;

/*
for (var i = 0; i < 10; i++) {
	var tempf = new Frame(i, (i * 2));
	roy.addToFrames(tempf);
}
*/

function start() {
	console.log('Starting Bowling application.');

	var players = pCLI.getPlayers();	

	for (var i = 0; i < LAST_FRAME_NUMBER; i++) {

		var frameNo = i + 1;

		for (var playersName in players) {
			var player = players[playersName];

			var name = player.name;

			var frame = fCLI.frameDialog(name, frameNo);

			player.addToFrames(frame);
		}
	}

	console.log(JSON.stringify(players));

	console.log('Exiting application.');
}

start();