

let obj = {
    fname : "sajib",
    lname : "hasan",
    age : 20,
    address : "Gazipur"
};

let arr = [40,20,34,64];

let i;

for(i in obj){
    document.write("<br>"+ i + " : " +obj[i]);
}

document.write("<br><br>");

arr[3] = 76;

for(let i in arr){
    document.write("<br>"+ i + " : " + arr[i]);
}