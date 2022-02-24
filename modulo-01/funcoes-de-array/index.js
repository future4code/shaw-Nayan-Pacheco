// Exercícios de interpretação de código

//1- a)vai ser impresso:  
//     { nome: "Amanda Rangel", apelido: "Mandi" } 0
//                                                  { nome: "Amanda Rangel", apelido: "Mandi" }
//                                                  { nome: "Laís Petra", apelido: "Laura" }
//                                                  { nome: "Letícia Chijo", apelido: "Chijo" }

//       { nome: "Laís Petra", apelido: "Laura" } 1 
//                                                 { nome: "Amanda Rangel", apelido: "Mandi" }
//                                                 { nome: "Laís Petra", apelido: "Laura" }
//                                                 { nome: "Letícia Chijo", apelido: "Chijo" }

//      { nome: "Letícia Chijo", apelido: "Chijo" } 2 
//                                                  { nome: "Amanda Rangel", apelido: "Mandi" }
//                                                  { nome: "Laís Petra", apelido: "Laura" }
//                                                  { nome: "Letícia Chijo", apelido: "Chijo" }

// 2- 
// a) vai ser impresso: ["Amanda Rangel","Laís Petra", "Letícia Chijo"]

//3-
// a) vai ser impresso:  { nome: "Amanda Rangel", apelido: "Mandi" }
//                       { nome: "Laís Petra", apelido: "Laura" }


// Exercícios de escrita de código
// 1- 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a)
 const nomesPets = pets.map( (pet)=>{
     return pet.nome
 })
console.log(nomesPets)

//b)
const Salsicha = pets.filter((pet)=>{
    return pet.raca==="Salsicha"
})
console.log(Salsicha)

//c)
const descontoPoodles = pets.filter((pet)=>{
     return pet.raca === "Poodle"
}).map((pet)=>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})
console.log(descontoPoodles)

//2- 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)
 const nomeProdutos = produtos.map((produto)=>{
     return produto.nome
 })
 console.log(nomeProdutos)

 //b)
 const desconto = produtos.map((produto)=>{
     return {
          nomePrdutos: produto.nome,
          precoProduto: (produto.preco * 0.95).toFixed(2)     
    }
 })
 console.log(desconto)

 //c)
 const bebidas = produtos.filter((produto)=>{
     return produto.categoria === "Bebidas"
 })
 console.log(bebidas)

 //d)
 const Ype = produtos.filter((produto)=>{
     return produto.nome.includes("Ypê")
 })
 console.log(Ype)

 //e)
 const ypePalavra = produtos.filter((produto)=>{
     return produto.nome.includes("Ypê")
 }).map((produto)=>{
     console.log(`Compre ${produto.nome} por ${produto.preco}`)
 })