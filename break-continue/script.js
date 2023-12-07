console.clear();

let a = 1;

while(a < 10){
    
    if(a == 5){
        console.log("v");
        a++;
        if(a == 6){
            continue;
        }
    }

    console.log(a);
    a++;
    
}


for(let a = 0; a < 2; a++){
    console.log(" ");
}


for(let i = 4; i < 6; i++){
    for(let j = 2; j < 4; j++){
        for(let k = 0; k < 2; k++){
            console.log(i+" "+j+" "+k);
            break;
        }
    }
}


for(let a = 0; a < 2; a++){
    console.log(" ");
}


for(let i = 4; i < 6; i++){
    for(let j = 2; j < 4; j++){
        for(let k = 0; k < 2; k++){
            console.log(i+" "+j+" "+k);
            continue;
            console.log("A");
        }
        continue;
        console.log("B");
    }
    console.log("C");
}






// 