



let obj = [
    {fname : "sajib", lname : "hasan", age : 30},
    {fname : "james", lname : "milan", age : 34},
    {"first name" : "mafin", "last name" : "rehan", "dog age" : 6},
    (a)=>{
        return 10 + obj[2]["dog age"] + a;
    }
];

document.write(obj[0].fname);
document.write("<br><br>");

document.write(obj[2]["last name"]);
document.write("<br><br>");

document.write(obj[3](2));