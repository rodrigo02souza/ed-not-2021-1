/*
BUBBLE SORT

Percorre o conjunto de dados, comparando o elemento atual com o ser sucessor e promovenod a troaca entre eles caso o primeiro seja maior que o segundo.

Faz isso em várias passadas, até, que, na última delas, nenhuma troca tenha sido registrada.

*/
let totTrocas, pass, comps
function bubbleSort(vetor){
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do{
        trocas = 0 // iniciando uma nova passada

        //Percuso do vetor, da primeira até a PENULTIMA posição
        for(let i = 0; i <= vetor.length - 2; i++){
            if(vetor[i] > vetor[i + 1]){
                //troca
                //let aux = vetor[i]
                //vetor [i] = vetor[i + i]
                //vetor[i + 1] = aux

                //troca direta em JS via desestruturação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]

                trocas++
            }
            comps ++
        }
        totTrocas += trocas
    } while (trocas > 0)
}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

console.log('Antes:', nums)
bubbleSort(nums)
console.log('Depois:', nums)
console.log({totTrocas, pass, comps})