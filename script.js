/*Variables*/

var message = 'Hello'
message = 555
var sms = 'World'
sms = 555
console.log(message + sms)

//Data types

var num = 13
var string = 'strick'
var isTrue = true // false
var obj = { a: 1 }
var nothing = null
var undef = undefined

console.log(typeof isTrue)

//Base operations

var num1 = 5
var num2 = 3

console.log('num1 + num2 = ', num1 + num2)
console.log('num1 - num2 = ', num1 - num2)
console.log('num1 * num2 = ', num1 * num2)
console.log('num1 / num2 = ', num1 / num2)
console.log('num1 %(остаток) num2', num1 % num2)

var str1 = 'Hello'
var str2 = 'World'

console.log('Hello + World = ', str1 + ' ' + str2)

//Operation Priority

var result = 2 * (2 + 2) <= 7
console.log(result)

//Operarors

var i = 1
//i = i + 1
i++
console.log('i', i)

// i = i + 3
i += 3
console.log('i', i)
// i = i * 2
i *= 2
console.log('i', i)

console.log('i + 1', ++i) //перфикс (сначала счёт->вывод)
console.log('i - 1', i--) //постфикс (сначала вывод->счёт)

//comparison

console.log('5 > 3', 5 > 3)
console.log('5 < 3', 5 < 3)

console.log('5 >= 5', 5 >= 5)

console.log('5 == 5', 5 == 5)
console.log('5 != 5', 5 != 5)

console.log('5 === 5', 5 === '5') //сравнивает тип и значение
console.log('5 == 5', 5 == '5') //сравнивает значение

//logic operators

/*&&  |  true  |  false
true  |  true  |  false
false |  fasle |  false

||    | true  | false
true  | true  | true
false | true  | false

&& (и) - true если все значения true
|| (или) - true если хоть одно значение true
! (нет) - инвертирует true или false
*/

console.log('true && true', true && true)
console.log('true && false', true && false)
console.log('true || true', true || true)
console.log('true || false', true || false)
console.log('!!!true=>!!false=>!true=>false', !!!true)
console.log('(false && true) || (true || false) || !true' + ' =',
	//              false      ||      true       || false  =  true
	(false && true) || (true || false) || !true)

//Conditional operators

var carName = 'Geely'
var currenYear = 2023
var carYear = 2014
var carAge = currenYear - carYear

//если г.в. меньше 5 лет ...
//если г.в. больше или равно 5 и меньше или равно 10 ...
//если г.в. больше 10 лет ...

if (carAge < 5) {
	console.log(carName + ' меньше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
	console.log('возраст ' + carName + ' больше или равно 5 и меньше или равно 10')
} else {
	console.log('возраст ' + carName + ' равен ' + carAge)
}

// 0 null undefined '' NaN = false

var trueTest = 0
if (trueTest) {
	console.log('Значение true')
} else {
	console.log('Значение false')
}

//if/else можно записать с помощью тернарного оператора

trueTest ? console.log('Значение true') : console.log('Значение false')

var personAge = 20
var message = personAge < 18
	? 'Не совершеннолетний'  //if
	: 'Совершеннолетний'     //else

console.log(message)

//Switch Case

var carColor = 'green'
/*if (carColor === 'green') {
	console.log('Цвет машины зелёный')
}
else if (carColor === 'red') {
	console.log('Цвет машины красный')
}
else if (carColor === 'black') {
	console.log('Цвет машины чёрный')
}
else {
	console.log('Цвет машины не определён')
}*/

switch (carColor) {
	case 'green':
		console.log('Цвет машины зелёный')
		break
	case 'red':
		console.log('Цвет машины красный')
		break
	case 'black':
		console.log('Цвет машины чёрный')
		break
	default:
		console.log('Цвет машины не определён')
}

//functions

var carName = 'Geely'
var personName = 'Антонио'
var carYear = 2014
var personYear = 1986

/*if (calculateAge(carYear) < 10) {
	console.log('Возраст ' + carName + ' меньше 10 лет')
} else {
	console.log('Возраст ' + carName + ' больше 10 лет')
}

if (calculateAge(personYear) < 10) {
	console.log('Возраст ' + personName + ' меньше 10 лет')
} else {
	console.log('Возраст ' + personName + ' больше 10 лет')
}*/

function calculateAge(year) {
	var currentYear = 2023
	var result = currentYear - year
	return result
}

function checkAndLogAge(year, name, compareTo) {
	if (calculateAge(year) < compareTo) {
		console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
	} else {
		console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
	}
}

checkAndLogAge(carYear, carName, 10)
checkAndLogAge(personYear, personName, 37)

// Способ создания функции через переменную. Тогда её нельзя вызвать ДО её объявления

var sayHelloTo = function (Name) {
	console.log('Привет, ' + Name)
}

sayHelloTo('Antonio')

// Strings

var message = '"Hello World"' // Ковычки в ковычках
var message2 = "'Hello World'" // Ковычки в ковычках
var message3 = "\"Hello World\"" // \ - экранирует ковычки, делая их строчными

console.log(message3)

var NewMessage = 'Hello World'

console.log(NewMessage.length) // .length медод, кол-во знаков у объекта
console.log(NewMessage.charAt(0)) // Нулевой знак
console.log(NewMessage.indexOf('World')) // На какой позиции искомое слово
console.log(NewMessage.substring(0, 5)) // Выводит знаки от укзазаного до указаного
console.log(NewMessage.substring((NewMessage.indexOf('World')), 11))

// Numbers

var fortyTwo = 42
var delta = 8 / 3

console.log(fortyTwo.toString())
console.log(+delta.toFixed(1)) // + - переводит строку в число,fixed - кол-во знаков после,

// Массивы

var cars = ['Tavria', 'VAZ', 'Matiz']
cars.push('Geely') // Добавить в конец
cars.unshift('AZLK') // Добавить в начало

console.log(cars)

cars.pop() // Удалить последний
cars.shift() // Удалить первый

console.log(cars)

// Объекты

var person = {
	name: 'Vasily',
	year: 1999,
	family: ['Igor', 'Elena'],
	car: {
		yaer: 2010,
		model: 'Ford'
	},
	calculateAge: function () {
		this.age = 2023 - this.year
	}
}

person.calculateAge()

console.log(person)

// Циклы

var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (var i = 0; i < Numbers.length; i++) {
// 	console.log(Numbers[i])
// }

for (var i = 0; i < Numbers.length; i++) {
	if (Numbers[i] % 2 === 0) {
		continue // Если условие выше true - пропускает вывод
	}
	console.log(Numbers[i])
}

for (var i = 0; i < Numbers.length; i++) {
	if (Numbers[i] % 2 === 0) {
		break // Если условие выше true - останавливает вывод
	}
	console.log(Numbers[i])
}

Numbers.push('string')

for (var i = 0; i < Numbers.length; i++) {
	if (typeof Numbers[i] === 'string') {
		console.log(Numbers[i])
	}
}