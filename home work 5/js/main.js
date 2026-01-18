'use strict'

class Teacher {
    constructor(firstName, lastName, age, gender, subject) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.subject = subject;
    }

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  // Класс Ученик, наследуется от Учителя
  class Student extends Teacher {
    constructor(firstName, lastName, age, gender, profession) {
      super(firstName, lastName, age, gender, null);
      this.profession = profession;
    }
  }

  const cardsContainer = document.getElementById("cards");

  // Учитель
  const teacher = new Teacher(
    "Руслан",
    "Светличный",
    35,
    "Мужской",
    "Frontend разработчик"
  );

  // Ученики
  const students = [
    new Student("Мухамед", "Саттаров", 33, "Мужской", "Ит менеджер"),
    new Student("Бактыбай", "Чекишев", 22, "Мужской", "Дизайнер"),
    new Student("Денис", "Семенюк", 27, "Мужской", "Backend разработчик"),
    new Student("Жансая", "Дауренкызы", 19, "Женский", "Студент"),
    new Student("Бахтияр", "Жасугунов", 29, "Мужской", "Бармен")
  ];

  // Функция создания карточки
  function createCard(person, type) {
    const card = document.createElement("div");
    card.classList.add("card", type);

    card.innerHTML = `
      <h3>${person.getFullName()}</h3>
      <p><strong>Возраст:</strong> ${person.age}</p>
      <p><strong>Пол:</strong> ${person.gender}</p>
      ${
        type === "teacher"
          ? `<p><strong>Предмет:</strong> ${person.subject}</p>`
          : `<p><strong>Профессия:</strong> ${person.profession}</p>`
      }
    `;

    cardsContainer.appendChild(card);
  }

  // Рендер учителя
  createCard(teacher, "teacher");

  // Рендер учеников
  students.forEach(student => {
    createCard(student, "student");
  });