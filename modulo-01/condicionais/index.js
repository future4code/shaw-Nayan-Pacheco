// Exercícios de interpretação de código

//1- a) O código verifica se o número que o usuário colocou é par ou impar
//   b) Para os tipos de números pares
//   c) Para os tipos de números impares

//2- a) O codigo serve para verificar o valor das frutas que consta na lista.
//   b) A mensagem impressa é "O preço da fruta  Maçã  é  R$  2.25".
//   c) Se retirar o break em cima do default a mensagem impressa é " O preço da fruta  Pêra  é  R$  5"
 
//3- a) Criando uma variável número que pergunta ao usuário para digitar um numero.
//   b) Se o usuário digitar o número 10 a mensagem impressa é "Esse número passou no teste" e  
//      se o usuário digitar -10 haverá um erro no console.
//   c) haverá um erro pois não colocamos outra condição, se caso o numero não passase no teste e nem informamos algum número negativo.

// Exercícios de escrita de código

//1-

let idade = Number(prompt("Quantos anos você tem?"))

if (idade >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}

//2-

const turno = prompt("Qual turno você estuda? Responda M para (Matutino), V para (Vespertino) e N para (Noturno)")

if(turno === "M"){
    console.log("Bom Dia!")
}else if(turno === "V"){
    console.log("Boa Tarde!")
} else if(turno === "N"){
    console.log("Boa Noite!")

}

//3-
 
let turno2 = prompt("Qual turno você estuda? Responda M para (Matutino), V para (Vespertino) e N para (Noturno)")

switch(turno2){
    case "M":
       console.log("Bom dia!");
    break;
    case "V":
        console.log("Boa Tarde!");
    break;
default:
    case "N":
        console.log("Boa Noite!");
    break;
}

//4-

const generoFilme = prompt("Qual o gênero do filme?")
const valorIngresso = Number(prompt("Qual o preço do ingresso?"))

if(generoFilme ==="Fantasia" && valorIngresso <=15) {
    console.log("Bom Filme!!");
} else {
    console.log("Escolha outro filme:(");
}