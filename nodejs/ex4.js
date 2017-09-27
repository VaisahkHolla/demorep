const sortArray = function(customers, cb) {
    cb(customers.sort((c1, c2) => {
        return c1.name.localeCompare(c2.name)
    }))
}

sortArray([{ id: 1, name: 'abc' }, { id: 2, name: 'xyz' },
    { id: 3, name: 'efgh' }
], res => {
    console.log('here');
    console.log(res);
})
console.log('first');