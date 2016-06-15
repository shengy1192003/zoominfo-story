var net = require('net');
var repl = require('repl');

var server = net.createServer(function(socket) {
	setTimeout(
	 ()=>{ socket.end("Hello World!"); socket.destroy();}
	 , 1000 );
 
     socket.on('end', function(){
        console.log('Client Socket Closed');
     });
});

server.listen({port:9000}, function() {
	console.log("Server Listening");
});

server.on('connection', function(){
    console.log('Client Connected');
});

// Adding REPL
var myRepl = repl.start({prompt:'Repl>'});

myRepl.context.s=server;

/*
server.error('error', function(){
	console.log('Error '+ error)
});*/