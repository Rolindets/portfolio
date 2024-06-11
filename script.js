function toggleMenu(){
    // target the following two elements
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    //on click it will add or remove the open class
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}