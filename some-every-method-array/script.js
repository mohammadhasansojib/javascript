




let ages = [16,19,15,36];


let a = ages.some(ageChecker);
let b = ages.every(ageChecker);


document.write(b+"<br><br>");
document.write(a+"<br><br>");

function ageChecker(age){
    return age >= 18;
}


