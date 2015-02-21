/*
 * This object that holds any information that is todo with a person.
 */
 
// This is constants for the game of bowling.
var LAST_FRAME_NUMBER = 10;
var FRAME_NUMER_OF_PINS = 10;

// This is the definition of the player within the game of bowling.
function Person(name) {
	
	// We keep track of the players name.
	this.name        = name;
	// This is the frames that the player has played.
	this.framesStack = new Array();

	// Function to add a new frame object onto the stack of games played.
	this.addToFrames = function(frame) {
		this.framesStack.push(frame);
	}

	// This totals the score for all of the frames that have been played.
	this.totalScore = function() {
		// Grab all of the frames that have been played.
		var frames = this.framesStack;

		// Temp score that we add to get the total.
		var score = 0;

		// Loop through all of the frames that have been played.
		for (var i = 0; i < frames.length; i++) {

			// Get the frame that we are currently working on.
			var frame = frames[i];

			// Get the score from the current frame.
			score += frame.returnScore();

			// If it was a strike then we handle it differently.
			if (frame.isStrike() && frame.frameNumber != LAST_FRAME_NUMBER) {

				// What is the maximum element we can get for totaling the score.
				var maxLen = ((i + 2) < frames.length) ? i + 2 : frames.length;
				// How many scores have we taken.
				var count = 0;
				
				// Loop through the frames after the current frame to get the scores.
				for (var j = i; j < maxLen; j++) {
					// Get the next frame and make it easy to access.
					var nextFrame = frames[j];

					// If its a strike then we can only add one score.
					if (nextFrame.isStrike()) {
						score += nextFrame.returnScore();
					} else {
						// Else we add the next frames scores to the current frame.
						if (count == 0) {
							score += nextFrame.returnScore();
							// We are done and got the max number of scores we can add.
							break;
						} else {
							score += nextFrame.shotOne;
						}
					}
					// We have added one more value.
					count++;
				}
			}

			// If we have a spare then we handle the adding of the score differently.
			if (frame.isSpare() && frame.framenNUmber != LAST_FRAME_NUMBER) {
				// Get the index of the next frame we can work with in the array.
				var nextFrameNo = ((i + 1) < frames.length) ? i + 1 : frame.length;
				
				// Get the next frame.
				var nxtFrame = frames[nextFrameNo];
				
				// If its a valid object then add it to the score.
				if (nxtFrame) {
					score += nxtFrame.shotOne;
				}
			}

			// We handle things differently if its the last frame of the game
			if (frame.frameNumber == LAST_FRAME_NUMBER) {

				// If we have got all of the pins then we have another shot to total.
				if (frame.shotOne == FRAME_NUMER_OF_PINS) {

					// This makes it easy to access the next shot in a frame.
					var shotTwo = frame.shotTwo

					// If its a valid object then continue.
					if (shotTwo) {
						
						// If the shot is a strike aswell, then we total the final shot.
						if (frame.shotTwo == FRAME_NUMER_OF_PINS) {

							// Get the object so its easy to access.
							var shotThree = frame.shotThree;

							// If that object is valid then we proceed.
							if (shotThree) {
								
								// Add the score of the final shot onto the score.
								score += shotThree;
							}
						}
					}
				}
			} 
		}
		// Return the total score for all of the frames for the current player.
		return Number(score);
	}
}

// Export the player object so its easy to access.
module.exports = Person;
