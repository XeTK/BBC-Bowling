var assert = require("assert")

var dataStructures = require('../datastrucutres');

var person = dataStructures.Person;
var frame  = dataStructures.Frame;

describe(
	'Person', 
	function(){

  		describe(
  			'Create Person.', 
  			function(){
    			it(
    				'User should be instantiated with the name Roy.', 
    				function(){

						var roy = new person('roy');

      					assert.equal('roy', roy.name);
    				}
    			)
  			}
  		)

  		describe(
  			'FrameStack empty', 
  			function(){
    			it(
    				'Roys framesStack should be empty.', 
    				function(){

						var roy = new person('roy');

      					assert.equal(0, roy.framesStack.length);
    				}
    			)
  			}
  		)

  		describe(
  			'FrameStack length should be one.', 
  			function(){
    			it(
    				'We should have one item in the frameStack.', 
    				function(){

						var roy = new person('roy');

						var tempf = new frame(1, 2);
						roy.addToFrames(tempf);
						
      					assert.equal(1, roy.framesStack.length);
    				}
    			)
  			}
  		)

  		describe(
  			'FrameStack should return same item.', 
  			function(){
    			it(
    				'We should get the same item back that we added.', 
    				function(){

						var roy = new person('roy');

						var tempf = new frame(1, 2);
						roy.addToFrames(tempf);

						var retf = roy.framesStack[0];
						
      					assert.equal(tempf, retf);
    				}
    			)
  			}
  		)

  		describe(
  			'FrameStack length should be 10.', 
  			function(){
    			it(
    				'We should have ten items in the frameStack.', 
    				function(){

						var roy = new person('roy');

						for (var i = 0; i < 10; i++) {
							var tempf = new frame(i, (i * 2));
							roy.addToFrames(tempf);
						}

      					assert.equal(10, roy.framesStack.length);
    				}
    			)
  			}
  		)

  		describe(
  			'FrameStack the 10 items should be the same as when they entered.', 
  			function(){
    			it(
    				'All of the items should be the same as when we added them', 
    				function(){

						var roy = new person('roy');

						var tStack = new Array();

						for (var i = 0; i < 10; i++) {
							var tempf = new frame(i, (i * 2));
							tStack.push(tempf);
							roy.addToFrames(tempf);
						}

						var retfs = roy.framesStack;

						for (var i = 0; i < retfs.length; i++) {
							assert.equal(tStack[i], retfs[i]);
						}

    				}
    			)
  			}
  		)

	}
);

describe(
	'Frames', 
	function(){

		describe(
  			'First Number should be the same', 
  			function(){
  				it(
    				'The first number should be the same.', 
    				function(){

    					var tempF = new frame(1, 2);

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

    					var tempF = new frame(1, 2);

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

    					var tempF = new frame(4, 5);

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
    					var tempF = new frame(10);

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
    					var tempF = new frame(9,0);

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
    					var tempF = new frame(4, 6);

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
    					var tempF = new frame(4,4);

    					assert.equal(false, tempF.isSpare());
    				}
    			)
  			}
  		)

	}
);

