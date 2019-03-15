/*
 * Implementar uma pilha usando um array significa que todos os métodos terão
 * complexidade O(n), o que significa que na pior das hipóteses todos os
 * elementos do array terão de ser iterados até que se encontre o elemento
 * desejado.
 *
 * Por isso uma melhor implementação é usando uma classe.
 * */

//Vamos criar uma classe Stack
class Stack {
   
}

//Agora uma classe com um construtor
class Stack {
   constructor() {
	   this.items = []
   }
}

//Para evitar que todas as funções tenham complexidade de tempo O(n), façamos
//um construtor melhor
 class Stack {
   constructor() {
	   this.items = {} //Items é um objeto vazio? É um objeto vazio.
	   this.count = 0
   }
}
/* Complexidade no tempo O(n) porque items é um array e na pior das hipóteses
 * uma chamada de função itera o array todo.
 *
 * Isso não escala bem. Arrays não escalam bem (decore).
 *
 * Além disso, um array é um conjunto ordenado, o que ocupa mais espaço em
 * memória do que um conjunto sem ordenação.
 */


//A primeira coisa que queremos fazer com nossa pilha é empilhar alguma coisa
class Stack {
   constructor() {
	   this.items = {}
	   this.count = 0
   }
   
   push(a) {
	   this.items[this.count] = a //Peraí, isso não é uma operação em array?
	   this.count++
   }
}
/* A sintaxe é a mesma. Mas na verdade criamos uma propriedade no objeto items.
 * E como todo mundo sabe, propriedades de objetos javascript 
 * são pares (chave, valor).
 */

//Como usar essa classe?
const stack = new Stack()
stack.push(8)
stack.push(4)
/* Internamente a classe terá
 * items = {
 * 	0: 8,
 * 	1: 4
 * }
 *
 * count = 2
 */

//Agora queremos tirar elementos da pilha
class Stack {
   constructor() {
	   this.count = 0
	   this.items = {}
   }
   
   push(a) {
	   this.items[this.count++] = a //sim, consolidei aquelas 2 linhas de código
   }
   
   pop() {
	   let output = undefined
	   
	   if (this.count > 0) {
		   output = this.items[this.count - 1]
		   this.count--
	   }
	   
	   return output
   }
}
/* Se count for 1, o elemento estará na key 0. Lembre-se.
 *
 * Se a pilha estiver vazia, é para isso que o tipo undefined serve.
 */
 
//A gente poderia deixar o elemento popado na memória, mas é mais limpo deletar
//essa propriedade da classe.
class Stack {
	constructor() {
		this.items = {}
		this.count = 0
	}
	
	push(a) {
		this.items[this.count++] = a
	}
	
	pop() {
		let output = undefined
		
		if (this.count > 0) {
			output = this.items[--this.count] //consolidei 2 linhas de código
			delete this.items[this.count]
		}
		
		return output
	}
}
/* Simplesmente use o operador delete.
 */

//Imprimir a pilha seria interessante. Implementa-se a função toString da classe
class Stack {
	constructor() {
		this.items = {}
		this.count = 0
	}
	
	push(a) {
		this.items[this.count++] = a
	}
	
	pop() {
		let output = undefined
		
		if (this.count > 0) {
			output = this.items[--this.count]
			delete this.items[this.count]
		}
		
		return output
	}
	
	toString() {
		let output = ``
		
		for (let i = this.count; i > 0; i--) {
			output = `${output}\n${this.items[i - 1]}`
		}
		
		return output
	}
}
/* Com exeção do toString(), todas as funções desta classe têm complexidade de
 * tempo O(1)
 */

//Agora é hora de resolver um problema com uma pilha.
//Há linguagens de programação que usam pilha para armazenar variáveis e
//chamadas de função. Daí quando você alopra com uma recursão infinita, dá
//stack overflow.

//Pra converter um número de base decimal para binária é só dividir por 2 e ir
//guardando os restos
function base10tobase2(n) {
	let output = ``
	const stack = new Stack()
	
	do {
		let r = n % 2
		stack.push(r)
	} while (n = Math.floor(n/2))
	
	let pop
	
	while ((pop = stack.pop()) !== undefined) {
		output += pop.toString()
	}
	
	return output
}
/* Javascript usa o tipo number, que não difere inteiros de ponto flutuante no
 * resultado de uma divisão. Então temos que usar Math.floor() para extrair
 * a parte inteira do resultado.
 */

//Converter de base 10 para qualquer base até 36
function base10tobaseb(n, b) {
	let output = ``
	const algarisms = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`
	const stack = new Stack()
	
	do {
		let r = n % b
		stack.push(r)
	} while (n = Math.floor(n/b))
	
	let pop
	
	while ((pop = stack.pop()) !== undefined) {
		output += algarisms[pop].toString()
	}
	
	return output
}

//Balanceamento de parênteses
//A cada ( você dá um push. A cada ) dá um pop. Se retornar undefined, deu ruim.
//se acabar a sentença com a pilha vazia, deu bom
function checkParentheses(sentence) {
	let output = false
	let s = new Stack()
	
	for(let i = 0; i < sentence.length; i++) {
		if (sentence[i] === `(` || sentence[i] === `[` || sentence[i] === `{`)
			s.push(sentence[i])
		else if (sentence[i] === `)`) {
			if (s.pop() !== `(`)
				return output
		}
		else if (sentence[i] === `]`) {
			if (s.pop() !== `[`)
				return output
		}
		else if (sentence[i] === `}`) {
			if (s.pop() !== `{`)
				return output
		}
		else {}		
	}
	
	if (s.count === 0)
		output = true
	
	return output
}

//Torre de Hanoi
//Tens 3 pinos e N discos. Os 5 discos devem ser movidos do pino 1 pro pino 3.
//Não pode botar um disco maior em cima de um menor.
//A mecânica de pilha é conveniente porque o problema é literalmente várias
//pilhas.

//Stack setup
let stackA, stackB, stackC, moves
stackA = new Stack()
stackB = new Stack()
stackC = new Stack()

//stackA.push(5) //função push da nossa classe Stack
stackA.push(4)
stackA.push(3)
stackA.push(2)
stackA.push(1)

function hanoiPrint() {
	console.log(`A`+stackA.toString())
	console.log(`B`+stackB.toString())
	console.log(`C`+stackC.toString())
	moves++
}

function hanoi(n, from, to, aux) {
	if (n === 1) {
		console.log(`lalau`)
		to.push(from.pop())
		hanoiPrint()
	}
	else {
		console.log(`lol`)
		hanoi(n-1, from, aux, to)
		to.push(from.pop())
		hanoiPrint()
		hanoi(n-1, aux, to, from)
	}
}

hanoiPrint()
moves = 0 //apenas para observação
hanoi(stackA.count,stackA,stackC,stackB)
console.log(`${moves} moves`)
/* Como fiz?
 * Identifiquei as variáveis:
 * 	quantidade de discos
 * 	pilha origem
 * 	pilha destino
 * 	pilha auxiliar
 *
 * Daí tratei um subconjunto de discos como outro problema igual, o que me levou
 * a usar recursão.
 *
 * Contei a quantidade de movimentos para verificar a complexidade de tempo
 * dessa solução:
 * 1 1
 * 2 3
 * 3 7
 * 4 15
 * 5 31
 * O(2^n - 1) < O(2^n)
 *
 * Não sei deduzir isso apenas olhando para a função
 */