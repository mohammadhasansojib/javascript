let age = prompt("what is your age?");

if(age >= 18 ){
    document.write("<h1>you are eligible for vote.</h1>");
}else if(age < 18 && age > 0){
    document.write("<h1>you are not eligible for vote</h1>");
}else{
    document.write("<h1>enter valid age.</h1>");
}