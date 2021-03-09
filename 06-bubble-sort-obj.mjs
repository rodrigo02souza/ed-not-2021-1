let totTrocas, pass, comps

function bubbleSort(vetor, fnComp){
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do{
        trocas = 0 // iniciando uma nova passada
        pass++
        //Percuso do vetor, da primeira até a PENULTIMA posição
        for(let i = 0; i <= vetor.length - 2; i++){
            if(vetor[i] > vetor[i + 1]){
                if(fnComp(vetor[i], vetor[i + 1])){
                    //Troca direta em JS via desestruturação de vetor
                    [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                }
                //troca
                //let aux = vetor[i]
                //vetor [i] = vetor[i + i]
                //vetor[i + 1] = aux

                //troca direta em JS via desestruturação de vetor
                

                trocas++
            }
            comps ++
        }
        totTrocas += trocas
    } while (trocas > 0)
}

import { candidatos } from './includes/candidatos-2018.mjs'

console.log('ANTES: ', candidatos)
console.time('Ordenando candidatos...')
bubbleSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatos)
console.log({totTrocas, pass, comps})
