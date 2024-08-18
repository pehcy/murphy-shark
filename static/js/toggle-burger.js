function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
    let navbar = document.getElementsByClassName("navbar-menu")[0];
    navbar.classList.toggle("active");
}