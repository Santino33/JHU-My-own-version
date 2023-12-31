var header = document.querySelector(".header");
var logo = document.querySelector(".logo");
var prevScrollPos = window.pageXOffset;

// Añadir un evento de scroll al window
window.addEventListener("scroll", function () {
    // Obtener la altura del scroll
    var scroll = window.pageYOffset;

    // Si el scroll es mayor que 50, añadir la clase sticky al header y cambiar el logo
    if (scroll > 50) {
        header.classList.add("sticky");

        logo.src = "../img/logo-horizontal-black.png";

    } else if (scroll <= 50) {
        // Si no, quitar la clase sticky al header y cambiar el logo
        header.classList.remove("sticky");
        logo.src = "../img/university-logo-small-horizontal-white-no-clear-space-e44019a003.png";
    }
});

window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if(prevScrollPos > currentScrollPos){
        //Deslizando hacia arriba
        header.style.top = "0";
        }else{
            //Deslizando hacia abajo
            
            header.style.top = "-100px";
        }
        prevScrollPos = currentScrollPos;
};