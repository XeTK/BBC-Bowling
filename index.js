
var pCLI = require('./playercli');
var fCLI = require('./framecli');

var LAST_FRAME_NUMBER = 10;

function start() {
	
	console.log('Starting Bowling application.');

	var players = pCLI.getPlayers();	

	for (var i = 0; i < LAST_FRAME_NUMBER; i++) {

		var frameNumber = i + 1;

		for (var playersName in players) {
			var player = players[playersName];

			var frame = fCLI.frameDialog(player.name, frameNumber);

			player.addToFrames(frame);
		}
	}

	console.log(JSON.stringify(players));

	console.log('Exiting application.');
}

start();