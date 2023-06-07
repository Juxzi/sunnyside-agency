const button =document.querySelector(".menubutton")
const menu= document.querySelector("nav")

button.addEventListener("click",()=>{
    if(menu.classList.contains("open")){
    menu.classList.remove("open")
    menu.classList.add("close")
    
    }else{
console.log("aurevoir")
menu.classList.remove("close")
        menu.classList.add("open")
    }
})