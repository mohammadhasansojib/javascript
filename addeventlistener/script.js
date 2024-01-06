



document.querySelector(".abc").onclick = colorChange;


function colorChange(){
    this.style.backgroundColor = "palevioletred";
}


document.querySelector("#heading").addEventListener("mouseout", fontSizeChange);

function fontSizeChange(){
    this.style.fontSize = "60px";
}


document.querySelector(".xyz").addEventListener("mouseenter",function(){
    this.style.fontFamily = "courier";
});



document.body.addEventListener("onload",()=>{
    document.body.style.backgroundColor = "#222";
});

let bg_color = ()=>{
    document.querySelector("#hello").style.backgroundColor = "hotpink";
}
document.querySelector("#hello").addEventListener("mouseout",bg_color);

let rm_color = ()=>{
    document.querySelector("#hello").removeEventListener("mouseout",bg_color);
}


document.querySelector("#hello").addEventListener("click",rm_color);


document.querySelector(".layer-1").addEventListener("mouseover", ()=>{
    alert("layer-1");
},true);

document.querySelector(".layer-2").addEventListener("mouseover", ()=>{
    alert("layer-2");
},true);

document.querySelector(".layer-3").addEventListener("mouseover",()=>{
    alert("layer-3");
},true);


