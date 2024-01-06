






document.querySelector(".abc").classList.add("xyz");

document.querySelector(".abc").classList.remove("hij");

let b = document.querySelector(".abc").classList.contains("efg");
console.log(b);
let c = document.querySelector(".abc").classList.item(2);
console.log(c);

document.querySelector(".btn").addEventListener("click",()=>{
    document.querySelector(".abc").classList.toggle("crimson");
    document.querySelector(".abc").classList.toggle("black");
})



let a = document.querySelector(".abc").classList.length;
console.log(a);