let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");
menu.addEventListener("click", function(){
    menu.classList.toggle("fa-times")
    header.classList.toggle("active")
})
window.addEventListener("onScroll", function(){
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
})