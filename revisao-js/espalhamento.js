console.log(Math.min(14, 7, -3, 23, 34)) // Retorna o menor número passado
console.log(Math.max(14, 7, -3, 23, 34)) // Retorna o maior número passado

const numeros = [14, 7, -3, 23, 34]

console.log(Math.min(...numeros))
console.log(Math.max(...numeros))

function somaTudo(...nums) {
    let soma = 0
    for(const num of nums) soma += num

    return soma
}

console.log(somaTudo(12,45,-5))
console.log(somaTudo(12,45,-5, 20,-30,10,11,15))