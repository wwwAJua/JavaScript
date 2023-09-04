Классы

// Получил доступ к div по id = #box1
var box1 = document.querySelector('#box1')
// Получил доступ к div по id = #box2
var box2 = document.querySelector('#box2')

// С помощью объекта classList использую метод add для добавления класса red
box1.classList.add('red')

// С помощью объекта classList использую метод remove для удаления класса blue(если он был в HTML)
box2.classList.remove('blue')

// Метод contains для проверки наличия класса у объекта
var hasClass = box2.classList.contains('blue')
console.log(hasClass)
// var hasClass = box2.classList.contains('red')
// console.log(hasClass)
// var hasClass = box2.classList.contains('box')
// console.log(hasClass)

// Проверка на класс
if (hasClass) { // если hasClass = box2.classList.contains('blue')
	box2.classList.remove('blue') // убрать .blue
} else { // иначе
	box2.classList.add('blue')  // добавить .blue
}