console.log("MZN Graphics Hub Loaded Successfully");

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Header Shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
        } else {
            header.style.boxShadow = "none";
        }
    }
});

// Back To Top
const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        topBtn.style.display = window.scrollY > 300 ? "flex" : "none";

    });

    topBtn.onclick = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };
}

// Loader
window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) loader.style.display = "none";

    }, 800);

});

// Theme
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.onclick = () => {

        document.body.classList.toggle("light");

    };

}

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav ul");

if (menuBtn && nav) {

    menuBtn.onclick = () => {

        nav.classList.toggle("show");

    };

}
