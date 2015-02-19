
var prompt = require('sync-prompt');

var Person = require('./person');

prompt = prompt.prompt;

var MAX_PLAYERS = 6;

function requestNumberOfUsers() {

	var numOfPlayers = prompt('Please enter the number of players: ');

	// Add Validation.

	return Number(numOfPlayers);

}

function requestPlayersName() {

	var playersName = prompt('Please enter the players name: ');

	// Add Validation.

	return playersName;
}

function getPlayers() {

	while(true) {

		var numOfPlayers = requestNumberOfUsers();

		if (numOfPlayers <= MAX_PLAYERS && numOfPlayers > 0) {

			var names = new Array();

			for (var i = 0; i < numOfPlayers; i++) {
				var name = requestPlayersName();

				if (names.indexOf(name) > -1) {
					console.log('This name has already been taken');
					i--;
				} else {
					names.push(name);
				}
			}

			break;

		} else if (numOfPlayers <= 0) {
			console.log('Please enter a value between 1 - ' + MAX_PLAYERS);
		} else {
			console.log('You have exceeded the maximum number of players which is ' + MAX_PLAYERS + ', please enter a number of players less than ' + MAX_PLAYERS);
		}
	}

	return createPlayersObjects(names);
}

function createPlayersObjects(playersNames) {

	var players = new Object();

	for (var i = 0; i < playersNames.length; i++) {
		var name = playersNames[i];

		var player = new Person(name);

		var key = name.toLowerCase();

		players[key] = player;
	}

	return players;
}

module.exports.getPlayers = getPlayers;