/*
 * This is all the CLI dialog for events involving frames within bowling.
 */

// Import external libarys for reading in console input and colouring text.
var prompt  = require('readline-sync');
var colours = require('colors');

// Import the frames class that holds the info about our frames in the game.
var Frame  = require('./frame');

// Stip the other function we dont use from the libary and just use the text input one.
prompt = prompt.question;

// Constants throughout the game. e.g number of frames and number of pins.
var FRAME_NUMER_OF_PINS = 10;
var LAST_FRAME_NUMBER   = 10;

// Frame dialog to get the information from the user.
function frameDialog(name, frameNo) {

	// Tell the user which player is playing and what frame we are on.
	console.log('Please enter the points for player ' + name.magenta + ' on frame ' + String(frameNo).green + '.');

	// Create a temp object for the results to be added to.
	var frame = new Object();

	// Get the first score for the current frame.
	var firstVal = validPrompt('Go number 1: ');

	// Assign it to the temp object we will pass back later.
	frame['one'] = firstVal;

	// Check to see if we need to get the results from the 2nd shot, as it may be a strike.
	if ((frame['one'] < FRAME_NUMER_OF_PINS )||(frame['one'] >= FRAME_NUMER_OF_PINS && frameNo == LAST_FRAME_NUMBER)) {
		
		// Holds the score for the round.
		var val = -1;

		// Loop till we know that we have got a valid responce from the user.
		while (true) {

			// Get the input from the user
			val = validPrompt('Go number 2: ');

			// If we are on the last frame then we dont need to valid
			// if the first score + the current score is greater than the number of pins.
			if (frameNo == LAST_FRAME_NUMBER)
				break;

			// Get the value of both the number of pins added together.
			var temp = firstVal + val;

			// If we are less than the total number of pins then we are good to exit the validation loop.
			if (temp <= FRAME_NUMER_OF_PINS) {
				break;
			} else {
				// Else prompt the user to enter a value that is between 0 and the remainder of the first shot - the number of pins.
				console.log(('Value to high, please enter a value between. 0 - ' + (FRAME_NUMER_OF_PINS - firstVal)).red);
			}

		}

		// Add the value to the temp object ready to pass it back. 
		frame['two'] = val;
	}

	// If we are on the 10th frame we react diferently, as if we have 2 strikes then we can have a 3rd shot.
	if (frame['two'] == FRAME_NUMER_OF_PINS && frameNo == LAST_FRAME_NUMBER)
		frame['three'] = validPrompt('Go number 3: ');

	// Convert the temp frame data into a proper frame object.
	var tFrame = new Frame(frameNo, frame);	

	// We return that fully fledged frame object back to the main application.
	return tFrame;
}

// This simplifies the validation of the scores that our being imputted.
function validPrompt(msg) {
	
	// Temp score of the value.
	var ret = -1;

	// Loop till we are sure we have validated the info from ther user.
	while (true) {

		// Prompt the user for there input.
		ret = prompt(msg.yellow);

		// Check if the result is valid e.g. no greater than the number of pins or less than 0.
		if (ret.length > 0 && ret <= FRAME_NUMER_OF_PINS && ret > -1) {
			break;
		} else {
			// Else prompt the user again to ask for the results again.
			console.log(('Please enter a value between 0 and ' + FRAME_NUMER_OF_PINS + '.').red);
		}
	}

	// Return the validated number.
	return Number(ret);
}

// Export the public functions back to the main application.
module.exports.frameDialog = frameDialog;