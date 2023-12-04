console.clear();


let a = (40 < 50) && (30 > 20);
let b = (40 < 50) || (30 > 20);
let c = (40 < 50) || (30 < 20);

let d = !(!(!(!(!(!(40 < 50))))));

let e = 40 > 50 ? "hello world" : "not hello world";

console.log(a,b,c);
console.log(d);
console.log(e);