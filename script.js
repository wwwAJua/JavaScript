// Атрибуты

var a = document.querySelector('a')
var oldHref = a.getAttribute('href')
a.setAttribute('href', 'https://youtube.com/')
a.textContent = 'Youtube'
a.setAttribute('title', 'clik me')

console.log(a)
console.log(a.attributes)
console.log(a.getAttribute('href'))