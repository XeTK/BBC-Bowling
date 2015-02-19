
var FRAME_SIZE = 10;

function Frame(shotOne, shotTwo) {
	this.shotOne = shotOne;
	this.shotTwo = shotTwo;

	this.returnScore = function() {
		var subTotal = (this.shotOne + this.shotTwo);

		return Number(subTotal);
	}

	this.isStrike = function() {
		return (this.shotOne >= FRAME_SIZE);
	}

	this.isSpare = function() {
		var subTotal = (this.shotOne + this.shotTwo);

		return (subTotal >= FRAME_SIZE);
	}
}

module.exports = Frame;