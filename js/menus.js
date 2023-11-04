const hamburguer = document.getElementById("header-menu");
const search = document.getElementById("header-search");
const menu = document.querySelector(".menu-section1");
const menuSearch = document.querySelector(".menu-section2");

hamburguer.addEventListener('click', () =>{
    menu.classList.toggle('spread')
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target!= menu && e.target != hamburguer){
        menu.classList.toggle('spread');
    }
       
})