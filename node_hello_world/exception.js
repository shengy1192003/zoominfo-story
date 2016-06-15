

// use with caution
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
});

setInterval(()=>{console.log('Tick')},1000);
// unknown function
foo();

console.log("End of file");