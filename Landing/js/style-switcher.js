'use strict'
// toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style on scroll
const styleSwitcher = document.querySelector(".style-switcher");

window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
})
// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) 
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
        
}

// const alternateStyles = document.querySelectorAll(".alternate-style");

// function setActiveStyle(color) {
//     alternateStyles.forEach(style => {
//         style.disabled = style.getAttribute("title") !== color;
//     });
// }
