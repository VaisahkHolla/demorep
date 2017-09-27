const sortArray = function(customers) {
    return customers.sort((c1, c2) => {
        return c1.name.localeCompare(c2.name);
    })

}

let sortedArray = sortArray([{ id: 1, name: 'abc' }, { id: 2, name: 'xyz' },
    { id: 3, name: 'efgh' }
])

console.log(sortedArray);
console.log("I'm first");