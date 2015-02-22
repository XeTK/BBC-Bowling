/*
 * This class handles the interaction for players from the command line.
 */

// Import the console read in, along with allowing colour'ed console output.
var prompt  = require('readline-sync');
var colours = require('colors');

// Import the player object so we can use it.
var Person = require('./person');

// Strip the unnecessary functions from the console input class.
prompt = prompt.question;

// Constant defining how many players are allowed to play the game.
var MAX_PLAYERS = 6;

// Request the number of players that will play the game.
function requestNumberOfUsers() {

	// Temp value to hold what the total number of players is.
	var numOfPlayers = -1;

	// Loop until we are sure we have valid text input.
	while(true) {

		// Ask how many players will be playing the game.
		numOfPlayers = prompt('Please enter the number of players: '.yellow);

		// Validate we got a valid response from the user. Else give them error dialog.
		if (numOfPlayers <= MAX_PLAYERS && numOfPlayers > 0) {
			// If we validated successfully we escape the loop.
			break;
		} else if (numOfPlayers <= 0) {
			console.log(('Please enter a value between 1 - ' + MAX_PLAYERS + '.').red);
		} else {
			console.log(('You have exceeded the maximum number of players which is ' + MAX_PLAYERS + ', please enter a number of players less than ' + MAX_PLAYERS + '.').red);
		}

	}

	// Return the number of players.
	return Number(numOfPlayers);
}

// Method for validating players name that has been inputted.
function requestPlayersName() {

	// Buffer to hold the name while we are working.
	var playersName = '';

	// Loop until we are sure that we have the correct input.
	while(true) {

		// Ask the user for the players name.
		playersName = prompt('Please enter the players name: '.yellow);

		// Check that user has entered something. TODO: Add more validation.
		if (playersName.length > 0) {
			break;
		} else {
			console.log('Please enter a name'.red);
		}
	} 

	// Return the validated name.
	return String(playersName);
}

// This gets the players and validates them, returning a list of player objects.
function getPlayers() {

	// Get the number of players.
	var numOfPlayers = requestNumberOfUsers();

	// Store for the names before we convert them.
	var names = new Array();

	// Loop through requesting names for the number of players we have in the game.
	for (var i = 0; i < numOfPlayers; i++) {
		// Request the name from the user.
		var name = requestPlayersName();

		// Check if the name has already been used.
		if (names.indexOf(name) > -1) {
			// If not ask again.
			console.log('This name has already been taken'.red);
			i--;
		} else {
			// Else push it onto the stack to be converted.
			names.push(name);
		}
	}

	// Pass to the method that converts a list of names to player objects. Then return that list.
	return createPlayersObjects(names);
}

// This converts a list of names into a list of player objects.
function createPlayersObjects(playersNames) {

	// This is a object that stores all of the players ready to be accessed later.
	var players = new Object();

	// Loop through the list of player names that have been supplied.
	for (var i = 0; i < playersNames.length; i++) {

		// Get the next name in the list.
		var name = playersNames[i];

		// Create a player object with that name.
		var player = new Person(name);

		// Get the key for the player, which we are gonna use the name.
		var key = name.toLowerCase();

		// Add the player object to the players object using the players name as a key to reference it.
		players[key] = player;
	}

	// Return the players object that has been built.
	return players;
}

// Make the getPlayers method visible to other classes.
module.exports.getPlayers = getPlayers;