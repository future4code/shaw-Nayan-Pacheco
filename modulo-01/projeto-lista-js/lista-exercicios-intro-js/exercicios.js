// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt ("digite o valor da altura" ))
const largura = Number(prompt ("digite o valor da largura"))
const area = altura * largura
console.log(area) 
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("digite o ano atual"))
const anoNasceu = Number(prompt ("digite o ano em que você nasceu"))
const idade = anoAtual - anoNasceu
console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso/(altura * altura)

return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("digite seu nome")
const idade = prompt("digite sua idade")
const email = prompt("digite seu email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("digite sua cor favorita")
const cor2 = prompt("digite sua segunda cor favorita")
const cor3 = prompt("digite sua terceira cor favorita")

let arrayCor= []
arrayCor.push(cor1,cor2,cor3)
console.log(arrayCor)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const quantidadeIgresso = custo/valorIngresso
return quantidadeIgresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const tamanho = array.length
return array [tamanho-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const end = array.length -1
const primeiroElemento = array[end]
const ultimoElemento = array[0]
array[0] = primeiroElemento
array[end] = ultimoElemento
return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const novastring1 = string1.toUpperCase()
const novastring2 = string2.toUpperCase()
return novastring1 === novastring2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("digite o ano atual"))
const anoNasceu = Number(prompt("digite o ano que você nasceu"))
const anoEmissaoRg = Number(prompt("digite o ano da emissão do seu Rg"))

const idade = anoAtual-anoNasceu
const anosPosEmissao = anoAtual-anoEmissaoRg

const deveRenovar = (idade <= 20 && anosPosEmissao >= 5) || (idade > 20 && idade <= 50 && anosPosEmissao >= 10) || (idade > 50 && anosPosEmissao >= 15)
console.log(deveRenovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const multiplosQuatrocentos = ano % 400 === 0
const multiplosQuatro = ano % 4 === 0
const multiplosCem = ano % 100 === 0
const verificaCemSim = multiplosCem && !multiplosQuatrocentos

console.log(multiplosQuatrocentos)
console.log(multiplosQuatro)
console.log(multiplosCem)
const eBissexto = multiplosQuatrocentos || (multiplosQuatro && !verificaCemSim)
return eBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt("Tem mais de 18 anos?")
const escolaridade = prompt("Possui ensino médio completo?")
const disponibilidade = prompt("Possui disponibilidade de horarios?")

const incricaoEhValida = (idade.toLowerCase() === "sim") && (escolaridade.toLowerCase() === "sim") && (disponibilidade.toLowerCase() === "sim")
console.log(incricaoEhValida)
}