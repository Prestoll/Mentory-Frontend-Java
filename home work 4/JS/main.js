'use strict'
//1. Обмен значениями двух переменных

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

//2. Проверка чётного или нечётного числа

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));

//3. Сумма чисел от 1 до N

function sumTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(sumTo(5));

//4. Переворот строки

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

//5. Фильтрация массива по чётным числам

function filterEven (arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filterEven([1,2,3,4,5,6,7,8,9,10]));

// второй вариант
// function filterEven(arr) {
//   return arr.filter(num => num % 2 === 0);
// }

// console.log(filterEven([1,2,3,4,5,6,7,8,9,10]));

//6. Конвертер температуры

function celsiusToFahrenheit(c) {
    return c * 9/5 + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

console.log(celsiusToFahrenheit(-15));
console.log(fahrenheitToCelsius(-15));

//7. Проверка строки на палиндром

function isPalindrome(str) {
    const normalized = str.toLowerCase().replaceAll(' ', '');

    const reversed = normalized.split('').reverse().join('')

    return normalized ===reversed;
}
console.log(isPalindrome("Race car"));
console.log(isPalindrome("Heloo"));

//8. Сумма всех элементов массива (for)

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([7,3,5]));

//9. Найти самое длинное слово в массиве строк (for…of)

function longestWord(words) {
  let longest = '';

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word
    }
  }
  return longest;
}

console.log(longestWord(["apple", "banana", "kiwi"]));

//10. Подсчитать количество свойств в объекте (for…in)

function countProps(obj) {
  let count = 0;

  for (const key in obj) {
    count++;
  }
  return count;
}

console.log(countProps({ a: 1, b: 2, c: 3 }));

//11. Вывести числа от 1 до N (while)

function printTo(n) {
  let i = 1;
  while (i<=n) {
    console.log(i);
    i++;
  }
}
printTo(5);

//12. Найти число в массиве вручную (без includes)

function manualFindIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
    
  }
  return undefined;
}

console.log(manualFindIndex([1,2,3], 3));
