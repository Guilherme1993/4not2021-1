let nota = 7.2
let situacao

// if (nota >= 6){
//     situacao = 'APROVADO'
// } else {
//     situacao = 'REPROVADO'
// }

// if (nota >= 6) situacao = 'APROVADO'
// else situacao = 'REPROVADO'

// As três partes do operador ternário
//1ª parte: condição (que iria após o if)
//Entre a 1ª e 2ª partes -> ?
//2ª parte: o resultado, caso a condição seja VERDADEIRA
//Entre a 2ª e 3ª partes -> :
//3ª parte: o resultado, caso a condição seja FALSA
situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(situacao)

let user = 'admin'
let userType

userType = user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user'

console.log(userType)