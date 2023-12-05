console.clear();

let day = 5;

switch(day){
        case 1:
        console.log("this is friday");
        break;

        case 2:
        console.log("this is saturday");
        break;

        case 3:
        console.log("this is sunday");
        break;

        case 4:
        console.log("this is monday");
        break;

        case 5:
        console.log("this is tuesday");
        break;

        case 6:
        console.log("this is wednesday");
        break;

        case 7:
        console.log("this thursday");
        break;

        default:
        console.log("Enter valid day number.");
}



let num = "50";

switch(true){
    case (num <= 30 && num > -100):
    console.log("num is between -100 and 30");
    console.log("this is case 1");
    break;

    case (num > 30 && num < 100):
    console.log("num is between 31 and 100");
    console.log("this is case 2");

    if(typeof num == "number"){
        console.log("user type a number as a number value");
    }else if(typeof num == "string"){
        console.log("user type a number as a string value");
    }

    break;

    default:
    console.log("Enter numerical value.");
}