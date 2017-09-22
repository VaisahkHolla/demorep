setTimeout(function() {
    console.log("Hello1");
}, );

console.log("hello1");
//Asynchronous
//even if the timer is set to zero, the hello1 is printed first as the console.log() in the callstack should be
//exe before the callback handler for setTimeout returns console.log()