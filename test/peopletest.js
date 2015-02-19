
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

						var tempf = new Frame(1, 2);
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

						var tempf = new Frame(1, 2);
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
							var tempf = new Frame(i, (i * 2));
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
							var tempf = new Frame(i, (i * 2));
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