var txt = "Sam I Am";
var pattern = /am/gi;
// or new RegExp('am','g') creating object of regular expression mind the case
//console.log(pattern instanceof RegExp);
//instanceof checks the Object matches the class or not
//console.log(pattern.test(txt));
//test is RE's func to check
//RE maintains a metadata which stores the location where the true condition(pattern is matched) is obtained

var result = pattern.exec(txt);
while (result) {
    console.log(result.index);
    result = pattern.exec(txt);
}

var res = txt.match(pattern);
console.log(res);