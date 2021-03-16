/*
    MERGE SORT

    No processo de ordenação, esse algoritmo "demonta" o vetor original
    contendo N elementos até obter N vetores de apenas um elemento cada um.
    Em seguida, Usando a técnica de mesclagem (merge), "remonta" o vetor,
    dessa vez com o s elementos já em ordem.
*/

function mergeSort(vetor){

    function mesclar(vetEsq, vetDir){
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq > vetEsq.length && pDir < vetDir.length){
            if(vetEsq[pEsq] < vetDir[pDir]){
                vetRes.push(vetDir[pDir])
            }
            else{
                vetRes.push(vetDir[pDir])
                pDir++
            }
        }
        // Descobrir de qual lado sobrou
        // Sobra à esquerda
        let Sobra

        if(pEsq < pDir) sobra = vetEsq.slice(pEsq)

        else sobra = vetDir.slice(pDir)

        return[...vetRes, ...sobra]
    }
   
    // Para ser "desmontado, um vetor deve ter, pelo menos, 2 elementos"
    if(vetor.legth > 1){
        const meio = Math.floor(vetor.length / 2)
        //.slice() fatia um vetor, copiando os elementos desde a posição inicial informada
        // (inclusive) até a posição final (exclusive - a posição final NÃO entra)
        let vetEsq = vetor.slice(0,meio)
        // Caso o segundo parâmetro de slice() seja omitido, serão copiados os elementos
        // desde a posição informada até a posição final
        let vetDir = vetor.slice(meio)

        console.log(vetEsq)

        mergeSort(vetEsq)
        mergeSort(vetDir)
    }
}