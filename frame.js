
var FRAME_NUMER_OF_PINS = 10;
var LAST_FRAME_NUMBER   = 10;

function Frame(frameNum, frameScores) {
	this.frameNumber = frameNum;

	this.shotOne = frameScores['one'];
	this.shotTwo = frameScores['two'];

	if (this.frameNum >= LAST_FRAME_NUMBER)
		this.shotThree = frameScores['three']; 

	this.returnScore = function() {
		var subTotal = this.shotOne;

		if (this.shotTwo)
			subTotal += this.shotTwo;

		if (this.frameNum >= LAST_FRAME_NUMBER)
			if (this.shotThree)
				subTotal += this.shotThree; 

		return Number(subTotal);
	}

	this.isStrike = function() {
		return (this.shotOne >= FRAME_NUMER_OF_PINS);
	}

	this.isSpare = function() {
		var subTotal = (this.shotOne + this.shotTwo);

		return (subTotal >= FRAME_NUMER_OF_PINS);
	}
}

module.exports = Frame;