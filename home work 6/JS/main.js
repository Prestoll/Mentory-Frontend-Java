'use strict'

// 1. Строка
let userName = "Mukhamed";

// 2. Число
let age = 36;

// 3. Булевое значение
let isMarried = true;

// 4. Массив
let skills = ["HTML", "CSS", "JavaScript"];

// 5. Объект
let user = {
  name: "Mukhamed",
  age: 36,
  city: "Astana"
};

// Сохранение
localStorage.setItem("userName", userName);
localStorage.setItem("age", age);
localStorage.setItem("isMarried", isMarried);
localStorage.setItem("skills", JSON.stringify(skills));
localStorage.setItem("user", JSON.stringify(user));

// Получение
let savedUserName = localStorage.getItem("userName"); // string
let savedAge = Number(localStorage.getItem("age")); // number
let savedIsMarried = localStorage.getItem("isMarried") === "true"; // boolean
let savedSkills = JSON.parse(localStorage.getItem("skills")); // array
let savedUser = JSON.parse(localStorage.getItem("user")); // object

console.log(savedUserName, typeof savedUserName);
console.log(savedAge, typeof savedAge);
console.log(savedIsMarried, typeof savedIsMarried);
console.log(savedSkills, Array.isArray(savedSkills));
console.log(savedUser, typeof savedUser);