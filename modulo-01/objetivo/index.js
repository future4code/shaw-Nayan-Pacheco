//EXERCÍCOOS DE INTERPRETAÇÃO DE CÓDIGO
//1-
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//1- a) Matheus Nachtergaele, Vírginia Cavendish e canal:Globo, horario:14h.

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//2-a) nome:Juca, idade:3 raca: SRD
//     nome:Juba, idade:3 raca: SRD
//     nome:Jubo, idade:3 raca: SRD
//b) Faz o novo objeto como modelo das antigas informações para outro.

// 3- 
//function minhaFuncao(objeto, propriedade) {
//	return objeto[propriedade]
//}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
 backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// 3- a) False; undefined
// b) Não existe propriedade declada então o resultado é undefined

//EXERCÍCIO DE ESCRITA DE CÓDIGO
//1- 
   const pessoa = {
     nome: "Nayan", 
     apelidos: ["Yan", "Nay", "Na"]
}
function essaPessoa(nome, apelidos){
        console.log(`Eu sou ${nome}, mas pode me chamar de ${apelidos[0]}, ${apelidos[1]} ou ${apelidos[2]}`)
}
essaPessoa(pessoa.nome,pessoa.apelidos)
const novaPessoa = {
    apelidos: ["Mariana", "Mari", "Ana"]
}
essaPessoa(novaPessoa.nome,novaPessoa.apelidos)

//2- 
const pessoa1= {
      nome: "Natan"
      idade: 27
      profissao: "estudante"
}
const pessoa2= {
      nome: "Allan"
      idade: 22
      profissao: "estudante"
}
function arrayPessoa(pessoa){
    const array=[pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
    return array
}
console.log(arrayPessoa(pessoa1))
console.log(arrayPessoa(pessoa2))

//3-a) 
var carrinho= []
//b)
 const uva = {
     nome:"uva"
     disponibilidade: true
 }
 const banana = {
     nome:"banana"
     disponibilidade: true
 }
 const morango = {
     nome:"morango"
    disponibilidade: true
}

//c)
function frutas(a,b,c) {
    carrinho.push(a)
    carrinho.push(b)
    carrinho.push(c)
}
frutas(uva, banana, morango)
//d)
console.log(carrinho)