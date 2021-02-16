let frutas = ['maçã', 'laranja', 'pera', 'uva', 'mamão', 'banana']

console.log(frutas)

let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

let terceiraFruta= frutas.splice(2, 1)

console.log(frutas)
console.log(terceiraFruta)

frutas.push('amora')
console.log(frutas)

frutas.unshift('jabuticaba')

console.log(frutas)

frutas.splice(2, 0)
console.log(frutas)

for(let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}

console.log('------------------------')

for(let i = frutas.length - 1; i >= 0;1--) {
    console.log(i, frutas[i])
}

console.log('--------------------------')

for(let f of frutas) {
    console.log(f)
}

console.log('--------------------------')

frutas.forEach(function(elemento){
    console.log(elemento)
})

console.log('--------------------')

frutas.forEach(elemento => console.log(frutas))