function buscaSequencial(vetor, valorBusca, fnComp){
    for(let i = 0; i < vetor.length; i++){
        // em vez de fazer a comparação dentro da função de busca
        //'terceirizamos' essa comparação chamando uma função externa
        if(fnComp(vetor[i], valorBusca)) return i // retorna a posição que foi encontrado
    }
    return -1 // valor de busca não encontrado
}

function buscaSequencial(vetor,valorBusca){
    for(let i = 0; 1 < vetor.lenght; i++){
        if(fnComp(vetor[i] === valorBusca)) return i
    }
    return -1
}

/*function comparaNome(objNome, valorBusca){
    return objNome.first_name === valorBusca
}*/

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.log(buscaSequencial(objNomes, obj => obj.first_name === "FAUSTO"))