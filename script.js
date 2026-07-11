// MZN Graphics Hub

console.log("MZN Graphics Hub Loaded Successfully");

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Header Shadow
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    }else{
        header.style.boxShadow = "none";
    }

});
/* Back To Top */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "flex";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* Loader */

window.onload=()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},800);

};

/* Theme */

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{

document.body.classList.toggle("light");

};

/* Mobile */

const menuBtn=document.getElementById("menuBtn");

const nav=document.querySelector("nav ul");

menuBtn.onclick=()=>{

nav.classList.toggle("show");

};
