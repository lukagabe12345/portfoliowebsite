let menuicon=document.getElementById("menu-icon");
let navbar=document.querySelector(".navbar");

menuicon.onclick=()=> {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}