import toAverage from "canivete/dist/toAverage";

let myAverage = [8, 10, 12, 14, 16].reduce(toAverage);
alert(myAverage);
// => 12
