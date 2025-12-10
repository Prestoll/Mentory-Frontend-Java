'use strict'

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const obj = {};

    formData.forEach(function(value, key){
        obj[key] = value;
    });

    console.log(obj);
    form.reset();

});