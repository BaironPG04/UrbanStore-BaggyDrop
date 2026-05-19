AOS.init({
    duration: 1000,
    once: true
});

/* NAVBAR SCROLL */

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".custom-navbar");

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});

/* PARALLAX HERO */

window.addEventListener("scroll", function(){

    const hero = document.querySelector(".hero-baggy");

    let scroll = window.pageYOffset;

    hero.style.backgroundPositionY =
        scroll * 0.4 + "px";

});