


let arr = [40,12,13,18];

document.write(arr);

let a = arr.filter(checkAdult);

document.write("<br><br>"+a);


function checkAdult(parameter){
    return parameter >= 18;
}