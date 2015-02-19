
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

              var frame = {
                "one": 1,
                "two": 2
              };

    					var tempF = new Frame(1, frame);

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

              var frame = {
                "one": 1,
                "two": 2
              };

    					var tempF = new Frame(1, frame);

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

              var frame = {
                "one": 4,
                "two": 5
              };

    					var tempF = new Frame(1, frame);

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

              var frame = {
                "one": 10
              };

    					var tempF = new Frame(1, frame);

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
              var frame = {
                "one": 9,
                "two": 0
              };
    					var tempF = new Frame(1, frame);

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
              var frame = {
                "one": 1,
                "two": 10
              };

    					var tempF = new Frame(1, frame);

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

              var frame = {
                "one": 4,
                "two": 4
              };
    					var tempF = new Frame(1, frame);

    					assert.equal(false, tempF.isSpare());
    				}
    			)
  			}
  		)

	}
);

