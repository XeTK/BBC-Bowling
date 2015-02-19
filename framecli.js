var prompt = require('sync-prompt');

var Frame  = require('./frame');

prompt = prompt.prompt;

var FRAME_NUMER_OF_PINS = 10;
var LAST_FRAME_NUMBER   = 10;

function frameDialog(name, frameNo) {

	console.log('Please enter the points for player ' + name + ' on frame ' + frameNo + '.');

	var frame = new Object();

	frame['one'] = validPrompt('Go number 1: ');

	if ((frame['one'] < FRAME_NUMER_OF_PINS && frameNo != LAST_FRAME_NUMBER)||(frame['one'] >= FRAME_NUMER_OF_PINS && frameNo == LAST_FRAME_NUMBER) )
		frame['two'] = validPrompt('Go number 2: ');

	if ((frame['one'] >= FRAME_NUMER_OF_PINS || frame['two'] >= FRAME_NUMER_OF_PINS) && frameNo == LAST_FRAME_NUMBER)
		frame['three'] = validPrompt('Go number 3: ');

	var tFrame = new Frame(frameNo, frame);	

	return tFrame;
}

function validPrompt(msg) {
	var ret = -1;

	while (true) {
		ret = prompt(msg);

		if (ret <= FRAME_NUMER_OF_PINS && ret > -1) {
			break;
		} else {
			console.log('Please enter a value between 0 and ' + FRAME_NUMER_OF_PINS + '.');
		}
	}

	return ret;
}

module.exports.frameDialog = frameDialog;