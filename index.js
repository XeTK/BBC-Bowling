
var Frame  = require('./frame');
var CLI    = require('./cli');

/*
for (var i = 0; i < 10; i++) {
	var tempf = new Frame(i, (i * 2));
	roy.addToFrames(tempf);
}
*/

function start() {
	console.log('Starting Bowling application.');


	var players = CLI.getPlayers();	



	console.log(JSON.stringify(players));


	console.log('Exiting application.');
}

start();