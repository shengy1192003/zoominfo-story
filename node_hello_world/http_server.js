var http=require('http');

var time = 0;
var count = 0;

console.log("Starting application");

http.createServer(function(req,res){
      var start = Date.now();
      res.write('Hello ');

      setTimeout(function(){
	       res.write('World '+req.url);
         res.end();

        time+=(Date.now()-start);
        count++;
        console.log("Avg response time "+count+" "+(time/count)); 
       },1000);

}).listen(9000, ()=>{
   console.log("Listening on port 9000");
});