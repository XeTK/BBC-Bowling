
var LAST_FRAME_NUMBER = 10;
var FRAME_NUMER_OF_PINS = 10;

function Person(name) {
	this.name        = name;
	this.framesStack = new Array();

	this.addToFrames = function(frame) {
		this.framesStack.push(frame);
	}

	this.totalScore = function() {
		var frames = this.framesStack;

		var score = 0;

		for (var i = 0; i < frames.length; i++) {

			var frame = frames[i];

			score += frame.returnScore();

			if (frame.isStrike() && frame.frameNumber != LAST_FRAME_NUMBER) {

				var maxLen = ((i + 2) < frames.length) ? i + 2 : frames.length;
				var count = 0;

				for (var j = i; j < maxLen; j++) {
					var nextFrame = frames[j];

					if (nextFrame.isStrike()) {
						score += nextFrame.returnScore();
					} else {
						if (count == 0) {
							score += nextFrame.returnScore();
							break;
						} else {
							score += nextFrame.shotOne;
						}
					}
					count++;
				}
			}

			if (frame.isSpare() && frame.framenNUmber != LAST_FRAME_NUMBER) {
				var nextFrameNo = ((i + 1) < frames.length) ? i + 1 : frame.length;

				var nxtFrame = frames[nextFrameNo];

				if (nxtFrame) {
					score += nxtFrame.shotOne;
				}
			}

			if (frame.frameNumber == LAST_FRAME_NUMBER) {

				if (frame.shotOne == FRAME_NUMER_OF_PINS) {

					var shotTwo = frame.shotTwo

					if (shotTwo) {

						if (frame.shotTwo == FRAME_NUMER_OF_PINS) {

							var shotThree = frame.shotThree;

							if (shotThree) {

								score += shotThree;
							}
						}
					}
				}
			} 
		}
		return Number(score);
	}
}

module.exports = Person;