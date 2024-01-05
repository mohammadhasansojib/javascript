



document.getElementsByClassName("abc")[0].style.backgroundColor = "hotpink";
document.getElementsByClassName("abc")[0].style.fontSize = "24px";
document.getElementsByClassName("abc")[0].style.fontFamily = "courier";
document.getElementsByClassName("abc")[0].style.fontWeight = "bold";

document.getElementsByClassName("abc")[0].ClassName = "xyz down up";

document.getElementsByClassName("abc")[0].classList.add("klm","opq");
document.getElementsByClassName("abc")[0].classList.remove("efg");



let a = document.getElementsByClassName("abc")[0].ClassName;
let b = document.getElementById("hello").ClassName = "myId";
let c = document.getElementsByClassName("abc")[0].style.backgroundColor;
let d = document.getElementsByClassName("abc")[0].classList;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

function colorChange(){
    document.getElementsByClassName("abc")[0].classList.toggle("lightblue");
}
