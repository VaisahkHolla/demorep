var s1 = [];
var s2 = new Array();
//console.log(s1 == s2);
//returns false because comparing the address of s1 and s2
//compares only references and in case of primitives values
var s1 = [1, 2, 3];
s2.push(1);
s2.push(2);
s2.push(3);

//console.log(s1 === s2);
//=== means typesafe comparision
//when typecoherence === should be used

function arrayEqual(a, b) {
    a = Array.isArray(a) ? a : [];
    b = Array.isArray(b) ? b : [];
    return a.length === b.length && a.every(function(el, ix) { return el === b[ix] });
}
console.log(arrayEqual(s1, s2));