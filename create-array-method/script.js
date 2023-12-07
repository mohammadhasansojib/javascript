


let arr = new Array(3);

arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;


for(let i = 0; i < arr.length; i++){
    document.write(arr[i]+"<br>");
}

document.write("<br>",arr.length,"<br><br><br>");



let arr2 = new Array(3);

arr2[0] = 10;


for(let i = 0; i < arr2.length; i++){
    document.write(arr2[i]+"<br>");
}

document.write("<br>",arr2.length,"<br><br><br>");


let arr3 = new Array(3);

arr3[0] = 10;


let arr4 = new Array(3);

for(let i = 0; i < arr4.length; i++){
    arr4[i] = prompt("Enter name "+(i+1)+" : ");
}

for(let i = 0; i < arr4.length; i++){
    document.write(arr4[i]+"<br>");
}