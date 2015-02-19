
var FRAME_NUMER_OF_PINS = 10;
var LAST_FRAME_NUMBER   = 10;

function Frame(frameNum, shotOne, shotTwo, shotThree) {
	this.frameNum = frameNuml;

	this.shotOne   = shotOne;
	this.shotTwo   = shotTwo;

	if (this.frameNum >= LAST_FRAME_NUMBER)
		this.shotThree = shotThree; 

	this.returnScore = function() {
		var subTotal = (this.shotOne + this.shotTwo);

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