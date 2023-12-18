


let num = "30.67";
let num2 = "30.43";
let num3 = 30.327654;
let bool = null;
let check = Infinity;

let a = Number(num);
let b = parseInt(num);
let c = parseFloat(num2);
let d = Number(bool);
let e = isFinite(num);
let f = Number.isFinite(check);
let g = Number.isInteger(3);
let h = Number.isInteger(4.3);
let i = num3.toFixed(3);
let j = num3.toPrecision(4);

document.write(a+4);
document.write("<br><br>");
document.write(b+10);
document.write("<br><br>");
document.write(c+10);
document.write("<br><br>");
document.write(d);
document.write("<br><br>");
document.write(e);
document.write("<br><br>");
document.write(f);
document.write("<br><br>");
document.write(g);
document.write("<br><br>");
document.write(h);
document.write("<br><br>");
document.write(i);
document.write("<br><br>");
document.write(j);