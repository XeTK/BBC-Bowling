
var prompt  = require('readline-sync');
var colours = require('colors');

var Person = require('./person');

prompt = prompt.question;

var MAX_PLAYERS = 6;

function requestNumberOfUsers() {

	var numOfPlayers = -1;

	while(true) {

		numOfPlayers = prompt('Please enter the number of players: '.yellow);

		if (numOfPlayers <= MAX_PLAYERS && numOfPlayers > 0) {
			break;
		} else if (numOfPlayers <= 0) {
			console.log(('Please enter a value between 1 - ' + MAX_PLAYERS + '.').red);
		} else {
			console.log(('You have exceeded the maximum number of players which is ' + MAX_PLAYERS + ', please enter a number of players less than ' + MAX_PLAYERS + '.').red);
		}

	}

	return Number(numOfPlayers);
}

function requestPlayersName() {

	var playersName = '';

	while(true) {
		playersName = prompt('Please enter the players name: '.yellow);

		if (playersName.length > 0) {
			break;
		} else {
			console.log('Please enter a name'.red);
		}
	} 

	return String(playersName);
}

function getPlayers() {

	var numOfPlayers = requestNumberOfUsers();

	var names = new Array();

	for (var i = 0; i < numOfPlayers; i++) {
		var name = requestPlayersName();

		if (names.indexOf(name) > -1) {
			console.log('This name has already been taken'.red);
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