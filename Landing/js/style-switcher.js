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

// document.querySelectorAll('.colors span').forEach(span => {
//     span.addEventListener('click', () => {
//         const color = span.classList[0]; // "color-3"
//         setActiveStyle(color);
//     });
// });

// day and night

const dayNight = document.querySelector(".day-night");
const icon = dayNight.querySelector("i");
dayNight.addEventListener("click", () => {
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        icon.classList.add("fa-moon");
        icon.classList.remove("fa-sun");
    }
    else
    {
        icon.classList.add("fa-sun");
        icon.classList.remove("fa-moon");
    }
})