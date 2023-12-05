console.clear();

let marks = 83;

if(marks >= 80 && marks <= 100){
    console.log("you are in merit.");
}else if(marks >= 60 && marks < 80){
    console.log("you are in 1st division.");
}else if(marks >= 40 && marks < 60){
    console.log("you are in second division.");
}else if(marks < 40){
    console.log("you are fail.");
}else{
    console.log("Enter valid marks.");
}