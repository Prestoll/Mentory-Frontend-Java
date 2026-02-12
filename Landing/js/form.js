'use strict'
// const form = document.querySelector("form");

// form.addEventListener("submit", async function(e) {
//     e.preventDefault(); // отменяем стандартную отправку

//     const formData = new FormData(form);

//     const response = await fetch(form.action, {
//         method: "POST",
//         body: formData,
//         headers: {
//             'Accept': 'application/json'
//         }
//     });

//     if (response.ok) {
//         alert("Message sent successfully!");
//         form.reset(); // очищает форму
//     } else {
//         alert("Something went wrong.");
//     }
// });

const form = document.getElementById("contact-form");

form.addEventListener("submit", async function(e) {
    e.preventDefault(); // отключаем стандартную отправку

    const button = form.querySelector("button");
    // блок кнопки
    button.disabled = true;
    button.textContent = "Sending...";

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            window.location.href = window.location.pathname.replace("index.html", "") + "/Mentory-Frontend-Java/Landing/thanks.html";
        } else {
            alert("Something went wrong. Please try again.");
        }

    } catch (error) {
        alert("Error sending message.");
    }
});