
// Доступ к элементам DOM (.getElement -> .querySelector)

// var div = document.getElementById('playground')
// var p = document.getElementsByClassName('text')

var div = document.querySelector('#playground')
var p = document.querySelectorAll('.text')
var h1 = document.querySelector('h1')
var ul1 = document.querySelector('#playground ul')
var ul2 = document.querySelector('#playground > div ul')

console.log(div)
console.log(p)
console.log(h1)
console.log(ul1)
console.log(ul2)