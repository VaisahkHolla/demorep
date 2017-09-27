const fs = require('fs'); //fs defined by default for file system reading
const readData = function(file) {
    //resolve is success and reject is fauilure
    return new Promise((resolve, reject) => {
        fs.readFile(file, (error, data) => {
            if (error) {
                reject(error);
                return; //exit
            }
            const lines = data.toString().trim().split("\r\n");
            resolve(lines); // no error so null 
        });
    });
}
const promise = readData("file2");
promise.then(function(data) {
        const numbers = data.map(Number); //maps the data elements into numbers Number is a wrapper
        const oddNumbers = numbers.filter(number => number % 2 === 1); // filters the even numbers from numbers
        console.log("odd numbers", oddNumbers);
    }).catch(function(reason) {
        throw reason;
        //console.log(reason)This displays the error thrown 
        //console.log(reason.message) this displays the error message
    })
    //then is similar to success callback
console.log('first'); //Asynchronous proof