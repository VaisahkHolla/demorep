const fs = require('fs'); //fs defined by default for file system reading
const readData = function(file, cb) {
    fs.readFile(file, (error, data) => {
        if (error)
            cb(error);
        const lines = data.toString().trim().split("\r\n");
        cb(null, lines); // no error so null 
    });
}
readData("file1", (error, data) => {
    if (error)
        throw error;
    console.log(data);
    const numbers = data.map(Number); //maps the data elements into numbers Number is a wrapper
    const oddNumbers = numbers.filter(number => number % 2 === 1); // filters the even numbers from numbers
    console.log("odd numbers", oddNumbers);
})

console.log('first'); //Asynchronous proof