
// Доступ к элементам DOM (.getElement -> .querySelector)

// var div = document.getElementById('playground')
// var p = document.getElementsByClassName('text')

var div = document.querySelector('#playground')
var p = document.querySelectorAll('.text')
var h1 = document.querySelector('h1')
var ul1 = document.querySelector('#playground ul')
var ul2 = document.querySelector('#playground > div ul')
var input = document.querySelector('input')

// console.log(div)
// console.log(p)
// console.log(h1)
// console.log(ul1)
// console.log(ul2)

// Содержимое элементов

h1.textContent = 'Changed from JavaScript'
input.value = 'I was input, а стал инпутом'

console.log(div.innerHTML)
console.log(h1.textContent)
console.log(input.value)

