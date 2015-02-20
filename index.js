
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

	players.sort(
		function(a,b) {
			return a.totalScore() - b.totalScore();
		}
	);

	for (var playersName in players) {
		var player = players[playersName];

		var score = player.totalScore();

		console.log(player + ': ' + score);
	}

	console.log('Exiting application.');
}

start();