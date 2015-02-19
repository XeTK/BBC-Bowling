
var assert = require("assert")

var Frame  = require('../frame');

describe(
	'Frames', 
	function(){

		describe(
  			'First Number should be the same', 
  			function(){
  				it(
    				'The first number should be the same.', 
    				function(){

    					var tempF = new Frame(1, 2);

    					assert.equal(1, tempF.shotOne);
    				}
    			)
  			}
  		)

  		describe(
  			'Second Number should be the same', 
  			function(){
  				it(
    				'The second number should be the same.', 
    				function(){

    					var tempF = new Frame(1, 2);

    					assert.equal(2, tempF.shotTwo);
    				}
    			)
  			}
  		)

  		describe(
  			'Total of both rounds.', 
  			function(){
  				it(
    				'Total of both shots should be 9.', 
    				function(){

    					var tempF = new Frame(4, 5);

    					assert.equal(9, tempF.returnScore());
    				}
    			)
  			}
  		)

  		describe(
  			'Is Strike', 
  			function(){
  				it(
    				'The frame resulted in a strike', 
    				function(){
    					var tempF = new Frame(10);

    					assert.equal(true, tempF.isStrike());
    				}
    			)
  			}
  		)

  		describe(
  			'Is Not Strike', 
  			function(){
  				it(
    				'The frame resulted in a not strike', 
    				function(){
    					var tempF = new Frame(9,0);

    					assert.equal(false, tempF.isStrike());
    				}
    			)
  			}
  		)

  		describe(
  			'Is Spare', 
  			function(){
  				it(
    				'The frame resulted in a spare', 
    				function(){
    					var tempF = new Frame(4, 6);

    					assert.equal(true, tempF.isSpare());
    				}
    			)
  			}
  		)

   		describe(
  			'Is Not Spare', 
  			function(){
  				it(
    				'The frame resulted in a not spare', 
    				function(){
    					var tempF = new Frame(4,4);

    					assert.equal(false, tempF.isSpare());
    				}
    			)
  			}
  		)

	}
);

