





let arr = [3,5,6,4];

let arr2 = [
    {fname : "sajib", lname : "hasan"},
    {fname : "rihan", lname : "khan"}
];

let a = arr.map(myFun);
let b = arr2.map(function (value){
    return value.fname + " " + value.lname + "<br>";
});

document.write(arr);
document.write("<br><br>");

document.write(a);
document.write("<br><br>");

document.write(b);

function myFun(value){
    return value * 10;
}