/*
 * This is the main execution point of the application.
 */

// Import all the other classes that have been created.
var pCLI   = require('./playercli');
var fCLI   = require('./framecli');
var sBoard = require('./scoreboard');

// Constant defining how many frames there are in the application.
var LAST_FRAME_NUMBER = 10;

// Method that is executed when the program is started.
function start() {

	// Get list of players from the CLI class.
	var players = pCLI.getPlayers();	

	// Start the game going through all the frames.
	for (var i = 0; i < LAST_FRAME_NUMBER; i++) {

		// Get the frame number that we are currently on.
		var frameNumber = i + 1;

		// Work through the players to give them there turns on the current frame.
		for (var playersName in players) {

			// Get the current player.
			var player = players[playersName];

			// Get the info for the current frame the player is playing.
			var frame = fCLI.frameDialog(player.name, frameNumber);

			// Add that frame to the player so we can reference it later.
			player.addToFrames(frame);
		}
	}

	// Once the game is over we pass the info to the scoreboard class that prints the results.
	sBoard.print(players);

}

start();