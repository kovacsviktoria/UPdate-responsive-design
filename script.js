function loadEvent() {
    const hamburger = document.querySelector(".hamburger"); //hamburger div element
    const navMenu = document.querySelector(".nav-menu");
    //ul element

    //a hamburger ikon kerul a click esemeny
    hamburger.addEventListener("click", mobileMenu);

     function mobileMenu() {
        hamburger.classList.toggle("active"); //kattintasra a hamburger ikon X lesz
        navMenu.classList.toggle("active"); //kattintasra a menulista elemei lathatoak lesznek
    }

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));
    //
    function closeMenu() {
        hamburger.classList.remove("active"); //
        navMenu.classList.remove("active");
    }
}

window.addEventListener("load", loadEvent);