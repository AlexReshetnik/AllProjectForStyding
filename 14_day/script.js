
let dictionary = Object.create(null);
console.log(dictionary.constructor);
// ваш код, щоб додати dictionary.toString метод

// додаємо певні дані
dictionary.apple = "Яблуко";
dictionary.__proto__ = "тест"; // __proto__ тут є звичайною властивістю об’єкта

// тільки ключі apple та __proto__ показуються в циклі
for(let key in dictionary) {
  console.log(key); // "apple", потім "__proto__"
}

// ваш метод toString в дії
console.log(dictionary); // "apple,__proto__"