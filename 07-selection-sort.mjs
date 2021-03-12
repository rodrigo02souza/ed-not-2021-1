/*
    SELETION SORT

    Trata-se de uma otimização do bubble sort, diminuindi drasticamente o número de trocas necessárias para fazer a ordenação.

    Isola um dos valores do vetor e procura pelo menor valor entre os restantes, promovendo a troca caso o primeiro valor seja maior que o segundo.

*/
 let trocas, pass, comps

function selectionSort(vetor){

   trocas = 0, pass = 0, comps = 0

    function encontrarMenor(inicio){

        let menor = inicio

        for(let j = inicio + 1; j < vetor.length; j++){
            if(vetor[j] < vetor[menor]){
                menor = j
            }
        }
        
        return menor
    }

    //Percurso do vetor até a PENÚLTIMA posição
    for(let i = 0; i <= vetor.length - 2; i++) {
        let menor = encontrarMenor(i + 1)

        if(vetor[menor] < vetor[i]){
             [vetor[menor], vetor[i]]  = [vetor[i], vetor[menor] ]
        }
    
    }
}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
selectionSort(nums)
console.log(nums)