var prompt  = require('readline-sync');
var colours = require('colors');

var Frame  = require('./frame');

prompt = prompt.question;

var FRAME_NUMER_OF_PINS = 10;
var LAST_FRAME_NUMBER   = 10;

function frameDialog(name, frameNo) {

	console.log('Please enter the points for player ' + name.magenta + ' on frame ' + String(frameNo).green + '.');

	var frame = new Object();

	var firstVal = validPrompt('Go number 1: ');

	frame['one'] = firstVal;

	if ((frame['one'] < FRAME_NUMER_OF_PINS )||(frame['one'] >= FRAME_NUMER_OF_PINS && frameNo == LAST_FRAME_NUMBER)) {
		var val = -1;
		while (true) {
			val = validPrompt('Go number 2: ');

			if (frameNo == LAST_FRAME_NUMBER)
				break;

			var temp = firstVal + val;

			if (temp <= FRAME_NUMER_OF_PINS) {
				break;
			} else {
				console.log(('Value to high, please enter a value between. 0 - ' + (FRAME_NUMER_OF_PINS - firstVal)).red);
			}

		}
		frame['two'] = val;
	}

	if (frame['two'] == FRAME_NUMER_OF_PINS && frameNo == LAST_FRAME_NUMBER)
		frame['three'] = validPrompt('Go number 3: ');

	var tFrame = new Frame(frameNo, frame);	

	return tFrame;
}

function validPrompt(msg) {
	
	var ret = -1;

	while (true) {

		ret = prompt(msg.yellow);

		if (ret.length > 0 && ret <= FRAME_NUMER_OF_PINS && ret > -1) {
			break;
		} else {
			console.log(('Please enter a value between 0 and ' + FRAME_NUMER_OF_PINS + '.').red);
		}
	}

	return Number(ret);
}

module.exports.frameDialog = frameDialog;