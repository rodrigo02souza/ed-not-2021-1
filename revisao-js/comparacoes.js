// Números
let a = 10, b = 8, c=10
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

// Strings
a = 'CATIFUNDA'
b = 'FELISBINO'
c = 'CATIFUNDA'
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('---------------------')

//Booleanos
a = true
b = false 
c = true
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('---------------------')

//vetores
a = [10, 20, 30, 40, 50]
b = [-3, -2, -1]
c = [10, 20, 30 , 40, 50]

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

//Comparações deretas de vetores dão resultados inconsistentes
// Não é possível comparar diretamente dois vetores 

// Objetos
a = {marca: 'Fiat', modelo: '147', ano: 1979}
b = {marca: 'Fiat', modelo: '147', ano: 1979}
c = {marca: 'Fiat', modelo: '147', ano: 1979}
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

// Objetos também não podem ser diretamente comparados entre si

// Conclusão: apenas os seguintes tipos de dados são diretamente comparados entre si:
// - number
// - string
// - boolean