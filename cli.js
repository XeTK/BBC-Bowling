
var prompt = require('sync-prompt');

var Person = require('./person');

prompt = prompt.prompt;

function requestNumberOfUsers() {

	var numOfPlayers = prompt('Please enter the number of players: ');

	// Add Validation.

	return numOfPlayers;

}

function requestPlayersName() {

	var playersName = prompt('Please enter the players name: ');

	// Add Validation.

	return playersName;
}

function getPlayers() {

	var numOfPlayers = requestNumberOfUsers();

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