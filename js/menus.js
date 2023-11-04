const hamburguer = document.getElementById("header-menu");
const search = document.getElementById("header-search");
const menu = document.querySelector(".menu-section1");
const menuSearch = document.querySelector(".menu-section2");
const input = document.querySelector(".input");
const inputPressed = document.querySelector(".input-pressed")

hamburguer.addEventListener('click', () =>{
    menu.classList.toggle('spread')
})

search.addEventListener('click', () =>{
    menuSearch.classList.toggle('spread')
})

input.addEventListener('click', () =>{
    input.classList.toggle('inputPressed')
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target!= menu && e.target != hamburguer){
        menu.classList.toggle('spread');
    }
       
})

window.addEventListener('click', e=>{
    if(menuSearch.classList.contains('spread') && e.target!= menuSearch && e.target != search && e.target != input){
        menuSearch.classList.toggle('spread');
    }
       
})

window.addEventListener('click', e=>{
    
})