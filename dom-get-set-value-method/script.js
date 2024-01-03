

let a = document.getElementsByClassName("content")[0].innerText;
let b = document.getElementsByClassName("content")[0].innerHTML;
let c = document.getElementsByClassName("abc")[0].getAttribute("style");
let d = document.getElementsByClassName("abc")[0].getAttributeNode("style");
let e = document.getElementsByClassName("abc")[0].getAttributeNode("style").name;
let f = document.getElementsByClassName("abc")[0].getAttributeNode("style").value;
let g = document.getElementsByClassName("abc")[0].attributes[2];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);



document.getElementsByClassName("abc")[0].innerText = "hello world";
document.getElementsByClassName("abc")[0].innerHTML = "<h1>Boom!!!!</h1>";
document.getElementsByClassName("abc")[0].setAttribute("name","paragraph");
document.getElementsByClassName("abc")[0].attributes[2].value = "hello";
document.getElementsByClassName("abc")[0].removeAttribute("style");


console.log(document.getElementsByClassName("abc")[0].getAttributeNode("name"));
console.log(document.getElementsByClassName("abc")[0].getAttributeNode("id"));