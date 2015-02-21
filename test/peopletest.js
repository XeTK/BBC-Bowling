
var assert = require("assert");

var Person = require('../person');
var Frame  = require('../frame');

describe(
	'Person', 
	function(){

		describe(
			'Create Person.', 
			function(){
  			it(
  				'User should be instantiated with the name Roy.', 
  				function(){

					    var roy = new Person('roy');

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

					    var roy = new Person('roy');

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

						var roy = new Person('roy');

						var frame = {
			                "one": 1,
			                "two": 2
			            };
    					var tempf = new Frame(1, frame);

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

						var roy = new Person('roy');

						var frame = {
			                "one": 1,
			                "two": 2
			            };

						var tempf = new Frame(1, frame);

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

						var roy = new Person('roy');

						for (var i = 0; i < 10; i++) {
							var frame = {
				                "one": i,
				                "two": (i * 2)
				            };

	    					var tempf = new Frame(i, frame);
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

						var roy = new Person('roy');

						var tStack = new Array();

						for (var i = 0; i < 10; i++) {
							var frame = {
				                "one": i,
				                "two": (i * 2)
				            };

	    					var tempf = new Frame(i, frame);

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

		describe(
			'Total Should be 300 this tests all strikes', 
			function(){
	  			it(
	  				'All the scores should total 300', 
	  				function(){

						var roy = new Person('roy');

						for (var i = 0; i < 10; i++) {
							var frame = {
				                "one": 10
				            };

				            if (i == 9) {
				            	frame['two'] = 10;
				            	frame['three'] = 10;
				            }

	    					var tempf = new Frame((i + 1), frame);
							roy.addToFrames(tempf);
						}

	    				assert.equal(300, roy.totalScore());
	  				}
	  			)
			}
		)

		describe(
			'Total Should be 80 this tests normal adding', 
			function(){
	  			it(
	  				'All the scores should total 80', 
	  				function(){

						var roy = new Person('roy');

						for (var i = 0; i < 10; i++) {
							var frame = {
				                "one": 4,
				                "two": 4
				            };

	    					var tempf = new Frame((i + 1), frame);
							roy.addToFrames(tempf);
						}

	    				assert.equal(80, roy.totalScore());
	  				}
	  			)
			}
		)
		
		describe(
			'Total Should be 22 this tests spares.', 
			function(){
	  			it(
	  				'All the scores should total 22', 
	  				function(){

						var roy = new Person('roy');

						var frame1 = {
			                "one": 6,
			                "two": 4
			            };

			            var frame2 = {
			                "one": 4,
			                "two": 4
			            };

    					var tempf1 = new Frame(1, frame1);
    					var tempf2 = new Frame(2, frame2);

						roy.addToFrames(tempf1);
						roy.addToFrames(tempf2);

	    				assert.equal(22, roy.totalScore());
	  				}
	  			)
			}
		)
	}
);