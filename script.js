let cores = ["azul","vermelho","verde","rosa","marrom"]

//console.log(cores)

cores.unshift("preto")

//console.log(cores)

cores.pop()

//console.log(cores)

cores.push("roxo","branco")

//console.log(cores)

cores.shift()

console.log(cores)

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()

console.log(numbers)

let obj = {
    nome: "Ioanis",
    idade: 20,
    cidade: "rio de janeiro"
  }

obj.cor = "azul"

delete obj.nome 

console.log(obj)

let cadastro = [
    {
        nome: "joão",
        telefone: 4545-4545,
        idade:19,
        amigos:['Paulo', 'Ioanis' , 'lelet','Mikael']
    },
    {
        nome: "Ioanis",
        telefone: 2659-8525,
        idade:20,
        amigos:["Paulo", "lelet","joão","Mikael"]
    },
    {
        nome: "Paulo",
        telefone: 8954-7845,
        idade:19,
        amigos:["lelet", "Ioanis","joão","Mikael"]
    },
    {
        nome: "lelet",
        telefone: 7545-9522,
        idade:11,
        amigos:["Paulo", "Ioanis","joão","Mikael"]
    },
    {
        nome: "Mikael",
        telefone: 4545-4545,
        idade:21,
        amigos:["Paulo", "Ioanis","joão","lelet"]
    }
]

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[1])