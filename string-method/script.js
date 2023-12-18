




let str = "    Hello is World is";

let a = str.match(/IS/gi);
let b = str.replace(/IS/gi, "are");
let c = str.trim();

document.write(a);
document.write(b);
alert(str);
alert(c);