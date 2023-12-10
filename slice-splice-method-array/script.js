

let arr = ["hello","hi","what","when"];

document.write(arr+"<br><br>");

let a = arr.slice(1,3);

document.write(a+"<br><br>");

let b = arr.slice(1,4);

document.write(b+"<br><br>");

let c = arr.slice(1);

document.write(c+"<br><br>");

let d = arr.slice(-3,-1);

document.write(d+"<br><br>");

let arr2 = ["what","when","why","how"];

document.write(arr2+"<br><br>");

arr2.splice(3,0,"hello","most");

document.write(arr2+"<br><br>");