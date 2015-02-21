/* 
 * This class is for printing the score board for the game.
 */

// Import for colour'ed console output.
var colours = require('colors');

// This function sorts the players and prints them out in the correct order.
function print(players) {

	var scoreStack = new Array();

	// Simplified player object to ease sorting.
	function PlayerScore(name, playerObj) {
		this.name      = name;
		this.playerObj = playerObj;
		this.score     = playerObj.totalScore();
	}

	// Convert the original player objects into something more workable.
	for (var playersName in players) {

		// Grab the next element in the array.
		var player = players[playersName];

		// Create the simplified PlayerScore object.
		var scoreObj = new PlayerScore(playersName, player);

		// Add it on the stack to be sorted later.
		scoreStack.push(scoreObj);
	}

	// Sort the list of PlayerScore items into order of who score the most.
	var sorted = new insertionSort('score', scoreStack);

	// Print out the scoreboard in the correct order.
	for (var i = sorted.length -1; i >= 0 ; i--) {

		// Get next element in array.
		var obj = sorted[i];

		// Build the string for the next line in the score board.
		var score = 'Player: ' + obj.name + ' Scored: ' + obj.score;

		// Colour the text a specific colour depending on what row.
		var text = ((i % 2) == 0) ? score.green : score.blue;

		// Print the row.
		console.log(text);
	}

}

/*
 * This sorts the results in the the order of the highest scoring.
 * This function is based off the one detailed. 
 * http://www.nczonline.net/blog/2012/09/17/computer-science-in-javascript-insertion-sort/
 */
function insertionSort(key, items) {
    
    for (var i = 0; i < items.length; i++) {
    
        // store the current value because it may shift later
        var value = items[i];
        
        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        for (var j = (i - 1); j > -1 && items[j][key] > value[key]; j--) {
            items[j + 1] = items[j];
        }

        items[j + 1] = value;
    }
    
    return items;
}

module.exports.print = print;