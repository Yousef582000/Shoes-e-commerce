let x=document.querySelectorAll(".about-small-image img")
let y=document.getElementById("imagebox")
var xarr = Array.prototype.slice.call(x);

for(let i=0;i<xarr.length;i++){
    xarr[i].addEventListener("click",function(){
        y.src=xarr[i].src
    })
}
let mune=document.getElementById("menu")
let list=document.querySelector("nav ul")
mune.addEventListener("click",function(){

list.classList.toggle("active")

})