//Only using promise
const sortArray = function(customers) {
    return new Promise((resolve, rejct) => {
        if (customers == null) {
            reject('Array cannot be null')
        }
        resolve(customers.sort((c1, c2) => {
            return c1.name.localeCompare(c2.name);
        }))

    })
}
const promise = sortArray([{ id: 1, name: 'abc' }, { id: 2, name: 'xyz' },
    { id: 3, name: 'efgh' }
])
promise.then((sortedArray) => {
    console.log(sortedArray);
}).catch((reason) =>
    console.log(reason));


//console.log(sortedArray);
console.log("I'm first");