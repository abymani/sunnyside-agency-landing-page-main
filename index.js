

let mobileMenu= document.querySelectorAll(".mobile-menu")[0];
let menu = document.querySelectorAll(".menu")[0];
mobileMenu.addEventListener('click',function(){
    menu.classList.toggle("active")
});