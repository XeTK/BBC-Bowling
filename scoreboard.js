var colours = require('colors');

function print(players) {

	var scoreStack = new Array();

	function PlayerScore(name, score) {
		this.name  = name;
		this.score = score;
	}

	for (var playersName in players) {
		var player = players[playersName];

		var score = player.totalScore();

		var tPlayer = new PlayerScore(playersName, score);

		scoreStack.push(tPlayer);
	}

	var sorted = new insertionSort('score', scoreStack);

	for (var i = sorted.length -1; i >= 0 ; i--) {
		var obj = sorted[i];

		var score = 'Player: ' + obj.name + ' Scored: ' + obj.score;

		console.log(score.green);
	}

}

module.exports.print = print;

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
            items[j+1] = items[j];
        }

        items[j+1] = value;
    }
    
    return items;
}