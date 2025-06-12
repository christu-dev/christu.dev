function toggleMenu(){
    const menu = document.querySelector(".menu-links"); // targeting hamburger menu link elements in html document
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}