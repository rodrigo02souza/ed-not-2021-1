//Função que eleva um número ao quadrado
//Se precisar disso em uma situação real, use
// o operador **

function quadrado(n){
    return n * n
}

console.log(quadrado(9))

// Caracteristicas da função acima:
// 1) apenas um pararãmetro
// 2) apenas uma linha de código, com return
// 3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

// Transformando em arrow function
// a) Não precisa de parâmetros envolvendo o parâmetro
// b)A palavra function é substituída pelo sinal =>, DEPOIS do parâmetro.
// c) Não são necessárias as chaves nem a palavra return
const quadrado2 = n => n * n
console.log(quadrado2(9))

// Função com mais de um parâmetro 
function potencia(b,e) {
    //b = base  e = expoente
    return b ** e
}
console.log(potencia(2,8))

// Função equivalente no formato arrow function 

// quando temos mais de um parâmetro, os parênteses em volta dos argumentos voltam a ser obrigatórios.
let potencia2 = (b, e) => b ** e
console.log(potencia2(2,8))

//Função sem parâmetro
function megasena() {
    // Esta função retorna um número aleatório entre 1 e 60
    // math.random() -> retorna um núero aleatório entre 0 (inclusive) e 1 (exclusive)
    // * 60 -> ajusta a faixa de valores para entre 0 e 59
    // + 1 -> ajusta a faixa de valores para entre 1 e 60
    // Math.floor -> arredonda para o menor inteiro (tira as casas decimais)
    return Math.random() * 60
}
console.log(megasena(), megasena())