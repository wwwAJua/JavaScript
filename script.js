// // Variables \\  ----------------------------------------------

// var message = 'Hello'
// message = 555
// var sms = 'World'
// sms = 555
// // console.log(message + sms)
// // console.log(`${message} ${sms}`)

// // Data types \\ --------------------------------------------------------

// var num = 13
// var string = 'strick'
// var isTrue = true // false
// var obj = { a: 1 }
// var nothing = null
// var undef = undefined

// // console.log(typeof isTrue)

// // Base operations \\ -------------------------------------------------------

// var num1 = 5
// var num2 = 3

// // console.log('num1 + num2 = ', num1 + num2)
// // console.log('num1 - num2 = ', num1 - num2)
// // console.log('num1 * num2 = ', num1 * num2)
// // console.log('num1 / num2 = ', num1 / num2)
// // console.log('num1 %(остаток) num2', num1 % num2)

// var str1 = 'Hello'
// var str2 = 'World'

// // console.log('Hello + World = ', str1 + ' ' + str2)

// //Operation Priority \\  -------------------------------------------------------

// var result = 2 * (2 + 2) <= 7
// // console.log(result)

// //Operarors \\  -----------------------------------------------------------------

// var i = 1
// //i = i + 1
// i++
// // console.log('i', i)

// // i = i + 3
// i += 3
// // console.log('i', i)
// // i = i * 2
// i *= 2
// // console.log('i', i)

// // console.log('i + 1', ++i) //перфикс (сначала счёт->вывод)
// // console.log('i - 1', i--) //постфикс (сначала вывод->счёт)

// //comparison  \\  --------------------------------------------------------------

// // console.log('5 > 3', 5 > 3)
// // console.log('5 < 3', 5 < 3)

// // console.log('5 >= 5', 5 >= 5)

// // console.log('5 == 5', 5 == 5)
// // console.log('5 != 5', 5 != 5)

// // console.log('5 === 5', 5 === '5') //сравнивает тип и значение
// // console.log('5 == 5', 5 == '5') //сравнивает значение

// //logic operators \\ -------------------------------------------------------------

// /*&&  |  true  |  false
// true  |  true  |  false
// false |  fasle |  false

// ||    | true  | false
// true  | true  | true
// false | true  | false

// && (и) - true если все значения true
// || (или) - true если хоть одно значение true
// ! (нет) - инвертирует true или false
// */

// // console.log('true && true', true && true)
// // console.log('true && false', true && false)
// // console.log('true || true', true || true)
// // console.log('true || false', true || false)
// // console.log('!!!true=>!!false=>!true=>false', !!!true)
// // console.log('(false && true) || (true || false) || !true' + ' =',
// //              false      ||      true       || false  =  true
// // (false && true) || (true || false) || !true)

// //Conditional operators \\ --------------------------------------------------------

// var carName = 'Geely'
// var currenYear = 2023
// var carYear = 2014
// var carAge = currenYear - carYear

// //если г.в. меньше 5 лет ...
// //если г.в. больше или равно 5 и меньше или равно 10 ...
// //если г.в. больше 10 лет ...

// if (carAge < 5) {
// 	// console.log(carName + ' меньше 5 лет')
// } else if (carAge >= 5 && carAge <= 10) {
// 	// console.log('возраст ' + carName + ' больше или равно 5 и меньше или равно 10')
// } else {
// 	// console.log('возраст ' + carName + ' равен ' + carAge)
// }

// // 0 null undefined '' NaN = false

// var trueTest = 0
// if (trueTest) {
// 	// console.log('Значение true')
// } else {
// 	// console.log('Значение false')
// }

// //if/else можно записать с помощью тернарного оператора

// // trueTest ? console.log('Значение true') : console.log('Значение false')

// var personAge = 20
// var message = personAge < 18
// 	? 'Не совершеннолетний'  //if
// 	: 'Совершеннолетний'     //else

// // console.log(message)

// //Switch Case \\  -----------------------------------------------------------------

// var carColor = 'green'
// /*if (carColor === 'green') {
// 	console.log('Цвет машины зелёный')
// }
// else if (carColor === 'red') {
// 	console.log('Цвет машины красный')
// }
// else if (carColor === 'black') {
// 	console.log('Цвет машины чёрный')
// }
// else {
// 	console.log('Цвет машины не определён')
// }*/

// switch (carColor) {
// 	case 'green':
// 		// console.log('Цвет машины зелёный')
// 		break
// 	case 'red':
// 		// console.log('Цвет машины красный')
// 		break
// 	case 'black':
// 		// console.log('Цвет машины чёрный')
// 		break
// 	default:
// 	// console.log('Цвет машины не определён')
// }

// //functions \\  ---------------------------------------------------------------

// var carName = 'Geely'
// var personName = 'Антонио'
// var carYear = 2014
// var personYear = 1986

// /*if (calculateAge(carYear) < 10) {
// 	console.log('Возраст ' + carName + ' меньше 10 лет')
// } else {
// 	console.log('Возраст ' + carName + ' больше 10 лет')
// }

// if (calculateAge(personYear) < 10) {
// 	console.log('Возраст ' + personName + ' меньше 10 лет')
// } else {
// 	console.log('Возраст ' + personName + ' больше 10 лет')
// }*/

// function calculateAge(year) {
// 	var currentYear = 2023
// 	var result = currentYear - year
// 	return result
// }

// function checkAndLogAge(year, name, compareTo) {
// 	if (calculateAge(year) < compareTo) {
// 		// console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
// 	} else {
// 		// console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
// 	}
// }

// checkAndLogAge(carYear, carName, 10)
// checkAndLogAge(personYear, personName, 37)

// // Способ создания функции через переменную. Тогда её нельзя вызвать ДО её объявления

// var sayHelloTo = function (Name) {
// 	// console.log('Привет, ' + Name)
// }

// sayHelloTo('Antonio')

// // Strings \\ ----------------------------------------------------------------------

// var message = '"Hello World"' // Ковычки в ковычках
// var message2 = "'Hello World'" // Ковычки в ковычках
// var message3 = "\"Hello World\"" // \ - экранирует ковычки, делая их строчными

// // console.log(message3)

// var NewMessage = 'Hello World'

// // console.log(NewMessage.length) // .length медод, кол-во знаков у объекта
// // console.log(NewMessage.charAt(0)) // Нулевой знак
// // console.log(NewMessage.indexOf('World')) // На какой позиции искомое слово
// // console.log(NewMessage.substring(0, 5)) // Выводит знаки от укзазаного до указаного
// // console.log(NewMessage.substring((NewMessage.indexOf('World')), 11))

// // Numbers \\ --------------------------------------------------------------------------

// var fortyTwo = 42
// var delta = 8 / 3

// // console.log(fortyTwo.toString())
// // console.log(+delta.toFixed(1)) // + - переводит строку в число,fixed - кол-во знаков после,

// // Массивы \\ ------------------------------------------------------

// var cars = ['Tavria', 'VAZ', 'Matiz']
// cars.push('Geely') // Добавить в конец
// cars.unshift('AZLK') // Добавить в начало

// // console.log(cars)

// cars.pop() // Удалить последний
// cars.shift() // Удалить первый

// // console.log(cars)

// // Объекты \\ -----------------------------------------------------

// var person = {
// 	name: 'Vasily',
// 	year: 1999,
// 	family: ['Igor', 'Elena'],
// 	car: {
// 		yaer: 2010,
// 		model: 'Ford'
// 	},
// 	calculateAge: function () {
// 		this.age = 2023 - this.year
// 	}
// }

// person.calculateAge()

// // console.log(person)

// // Циклы  ------------------------------------------------------

// var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // for (var i = 0; i < Numbers.length; i++) {
// // 	console.log(Numbers[i])
// // }

// for (var i = 0; i < Numbers.length; i++) {
// 	if (Numbers[i] % 2 === 0) {
// 		continue // Если условие выше true - пропускает вывод
// 	}
// 	// console.log(Numbers[i])
// }

// for (var i = 0; i < Numbers.length; i++) {
// 	if (Numbers[i] % 2 === 0) {
// 		break // Если условие выше true - останавливает вывод
// 	}
// 	// console.log(Numbers[i])
// }

// Numbers.push('string')

// for (var i = 0; i < Numbers.length; i++) {
// 	if (typeof Numbers[i] === 'string')
// 		console.log(Numbers[i])
// }

// // Классы \\  -------------------------------------------------

// // Получил доступ к div по id = #box1
// var box1 = document.querySelector('#box1')
// // Получил доступ к div по id = #box2
// var box2 = document.querySelector('#box2')

// // С помощью объекта classList использую метод add для добавления класса red
// // box1.classList.add('red')

// // С помощью объекта classList использую метод remove для удаления класса blue(если он был в HTML)
// // box2.classList.remove('blue')

// // Метод contains для проверки наличия класса у объекта
// // var hasClass = box2.classList.contains('blue')
// // console.log(hasClass)
// // var hasClass = box2.classList.contains('red')
// // console.log(hasClass)
// // var hasClass = box2.classList.contains('box')
// // console.log(hasClass)

// // Проверка на класс
// // if (hasClass) { // если hasClass = box2.classList.contains('blue')
// // 	box2.classList.remove('blue') // убрать .blue
// // } else {// иначе
// // 	box2.classList.add('blue')  // добавить .blue
// // }

// // События \\ ----------------------------------------

// // Получил доступ по tag
// var input = document.querySelector('input')
// var button = document.querySelector('button')
// var h1 = document.querySelector('h1')

// // Фукция с названием buttonHandler
// function buttonHandler() {
// 	console.log('Clicked') // выводит в консоль текст Clicked
// 	// h1.textContent = 'Changed from JS' \\ меняет содержимое на Changed from JS
// 	h1.textContent = input.value // меняет свойство input.value
// }
// // с помощью .addEventListener вызываю событие click выполняющее функцию buttonHandler
// button.addEventListener('click', buttonHandler)

// h1.addEventListener('mouseenter', function () {
// 	this.style.color = 'red'
// 	this.style.backgroundColor = 'yellow'
// })

// h1.addEventListener('mouseleave', function () {
// 	this.style.color = 'black'
// 	this.style.backgroundColor = 'transparent'
// })

// Погружение и всплытие \\ -----------------------------------------------

// Доступ ко всем div
// var divs = document.querySelectorAll('div')
// // Цикл for для выбора имеющихся div по порядку
// for (var i = 0; i < divs.length; i++) {
// 	// Событие click вызвает функцию у каждого div которая показывает его id в console
// 	divs[i].addEventListener('click', function () {
// 		console.log(this.getAttribute('id'))
// 	}, true) // По умочанию работает на погружение (false) При нажатии на 2 отработает 2 -1. Если написать true, логика изменится на 1-2 (всплытие)
// }


var divs = document.querySelectorAll('div')
var link = document.querySelector('a')

for (var i = 0; i < divs.length; i++) {

	divs[i].addEventListener('click', function (event) {
		event.stopPropagation() // Срабатывает только на выбраном объекте(без всплытия/погружения)
		console.log(this.getAttribute('id'))
	})
}

// Объект события------------------------------------------------------------


link.addEventListener('click', linkClick)

function linkClick(event) {
	event.preventDefault() // Отменяем поведение ссылки

	var div = divs[0] // Выбираем элемент с которым хотим работать

	div.style.display = div.style.display === 'none'
		? 'flex'
		: 'none'
	// Через style.display меняем значение с flex на none
	console.log(div.style.display) // выводим текущее значение в console
}

