



let obj = {
    fname : "sajib",
    lname : "hasan",
    age : 20,
    address : "Bangladesh",
    isTrue : true,
    blank : undefined,
    isnull : null,
    arr : [30,50,23,53],
    obj : {
        height : 5,
        "hair color" : "black"
    },
    myFun : function (a,b){
        return a + this.obj["hair color"];
    },
    arrow_fun : ()=>{
        return 30 + 20;
    }
};


document.write(obj.obj["hair color"]);
document.write("<br><br>");

document.write(obj.obj.height);
document.write("<br><br>");

document.write(obj.myFun(8,3));
document.write("<br><br>");

document.write(obj.arrow_fun());
