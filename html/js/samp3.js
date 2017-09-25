var cat = ['x', 'y', 'z'];
for (let item of cat) {
    console.log(item);
}
//for of syntax

let [low, avg, high, l = 20] = cat;
//Destructuring
//undefined to l as no value present default assignment also available

//Can use rest parameters also

let [lo, ...rem] = cat;
console.log(rem);