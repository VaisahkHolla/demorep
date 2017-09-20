var myFunc = function(fn) {
    console.log(fn(30));
}

myFunc(function(x) {
    return x * x;
})

//The  use of callback function is that we can decide when we want to exe the function
//i.e it can be asynchronous or synchronous