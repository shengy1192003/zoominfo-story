var EventEmitter = require('events');
var util = require('util');

// class
var TickEvent=function(){
	// similar to super()
	EventEmitter.call(this);
};

util.inherits(TickEvent, EventEmitter);

var emitter = new TickEvent();

emitter.on('tick', (obj)=>{
	console.log("Tick event "+JSON.stringify(obj));
});

emitter.emit('tick',{a:10,b:9});
var i=0;
setInterval(()=>{emitter.emit('tick',{})},1000);

