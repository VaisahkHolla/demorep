var customerarray = [{
        id: 1,
        name: "name1",
        age: 45
    },
    {
        id: 3,
        name: "name2",
        age: 35
    },
    {
        id: 5,
        name: "name3",
        age: 25
    }
];

var sortedArray = customerarray.sort(function(c1, c2) {
    //console.log(c1.age - c2.age);
    return c1.age - c2.age;
    /*returns 0 if equal, 1 if c1>c2 and -1 if c2>c1 this is done by sort,
    value from c1.age-c2.age gives a value which is then sorted by sort function
    */
    //sort is similar to bubble sort function
    /* use c1.name.localecompare(c2.name) for strings*/
})
for (field in sortedArray) {
    console.log(sortedArray[field].age)
}
//console.log(sortedArray)