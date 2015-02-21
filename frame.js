/* 
 * Frame object class, this signifies a players frame within the game.
 */

// Constants for the game.
var FRAME_NUMER_OF_PINS = 10;
var LAST_FRAME_NUMBER   = 10;

// Declaring the frame object.
function Frame(frameNum, frameScores) {

	// Keep a track of what frame we were on at the time the object was instantiated.
	this.frameNumber = frameNum;

	// Get the scores for both of the main shots.
	this.shotOne = frameScores['one'];
	this.shotTwo = frameScores['two'];

	// If we are on the last frame of the game we handle it differently.
	if (this.frameNum >= LAST_FRAME_NUMBER)
		this.shotThree = frameScores['three']; 

	// This calculates the score of all of the scores put together, simplifying the maths.
	this.returnScore = function() {
		var subTotal = this.shotOne;

		// If the shot two object was set to something then we retrieve its value.
		if (this.shotTwo)
			subTotal += this.shotTwo;

		// Get value of shot 3 if we did this in the last frame of the game.
		if (this.frameNum >= LAST_FRAME_NUMBER)
			if (this.shotThree)
				subTotal += this.shotThree; 

		// Return the score for the frame.
		return Number(subTotal);
	}

	// Quick function to determine if the frame was completed in a strike.
	this.isStrike = function() {
		return (this.shotOne >= FRAME_NUMER_OF_PINS);
	}

	// Another function to check if the frame was completed in a spare.
	this.isSpare = function() {
		var subTotal = (this.shotOne + this.shotTwo);

		// Return boolean of if it was a spare or not.
		return (subTotal >= FRAME_NUMER_OF_PINS);
	}
}

// Export the class ready to be used.
module.exports = Frame;