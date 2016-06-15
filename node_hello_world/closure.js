console.log("Hello World");


function a(){
	abc = "Step 1";
	setTimeout(()=>{console.log("async "+abc)},1000);
}

a();