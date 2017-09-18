//Callback...Instant implementation

function wishes() {
    console.log("WIshes");
}

function display() {
    console.log("Display");
}

var f1 = function(cb) {
    cb();
}

f1(display);
f1(wishes);