
function Person(name) {
	this.name        = name;
	this.framesStack = new Array();

	this.addToFrames = function(frame) {
		this.framesStack.push(frame);
	}
}

module.exports = Person;