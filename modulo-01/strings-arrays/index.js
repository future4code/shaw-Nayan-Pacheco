// 1) Exercicio Interpretação de código
//     a) não vai aprarecer nada pois não tem nenhum valor atribuido
//     b) Null
//     c) 11
//     d) 3
//     e) (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//     f) 9

//  2) Subi num ônibus em Mirrocos 27

// 1) Exercício de escrita de código
      
      const seunome = prompt ("digite seu nome")
      console.log (seunome)
      const seuemail = prompt ("digite seu email")
      console.log (seuemail)
      console.log (`o email ${seuemail} foi cadastrado com sucesso. Seja bem vindo ${seunome} `)


// 2)
    const minhacomida = ["sushi", "pizza", "lasanha", "feijoada", "strogonoff"] 
           console.log (minhacomida)
             console.log ("Essas são as minhas comidas preferidas")
             console.log (minhacomida[0])
             console.log (minhacomida[1])
             console.log (minhacomida[2])
             console.log (minhacomida[3])
             console.log (minhacomida[4])
        const minhapreferida = prompt ("qual a sua comida preferida?")
        minhacomida[1] =  minhapreferida
        console.log (minhacomida)

// 3)
    
       const informaTarefa1 = prompt ("digite sua 1 tarefa")        
       const informaTarefa2 = prompt ("digite sua 2 tarefa")     
       const informaTarefa3 = prompt ("digite sua 3 tarefa")  
       const listaDeTarefas = [informaTarefa1, informaTarefa2, informaTarefa3]
       console.log(listaDeTarefas)   
       const remova = Number (prompt("Escolha  0, 1, 2 para excluir uma tarefa."))
console.log(remova-1)

listaDeTarefas.splice (remova,1)
console.log(listaDeTarefas)