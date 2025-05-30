var checkbox=document.getElementById("toggle")
var menu=document.getElementById("menu").classList

checkbox.addEventListener("change", ()=>{
    menu.toggle("right-0")
    menu.toggle("-right-100")
})