var dataStructures = require('./datastrucutres');

var person = dataStructures.Person;
var frame  = dataStructures.Frame;

console.log('Starting Bowling application.');

var roy = new person('roy');

for (var i = 0; i < 10; i++) {
	var tempf = new frame(i, (i * 2));
	roy.addToFrames(tempf);
}

console.log(JSON.stringify(roy));

console.log('Exiting application.');