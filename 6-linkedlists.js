/* Linked List (Lista Ligada) é uma estrutura muito parecida com o array no
 * sentido de que seus elementos são armazenados de forma ordenada. Mas ao
 * contrário dos arrays, os elementos das listas ligadas não são armazenados
 * de forma sequencial na memória. Cada elemento contém, além de seu valor, um
 * ponteiro para o próximo elemento.
 *
 * Inserir ou remover elementos no início ou no meio de um array é caro porque
 * precisa-se shiftar todos os outros elementos. Na lista ligada é barato, pois
 * basta atualizar um ponteiro.
 *
 * Por outro lado, para acessar um elemento do array basta entrar com seu
 * índice; enquanto para a lista ligada é preciso iterar por todos os elementos,
 * usando os ponteiros desde a cabeça (head).
 */

//Vamos criar uma classe LinkedList
class LinkedList {
	
}

//Vamos criar o construtor
class LinkedList {
	constructor() {
		this.head = undefined
		this.count = 0
	}
}

//Já deu pra adivinhar que uma classe auxiliar será necessária, a classe Node:
class Node {
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}
/* element pode ser tanto um valor quanto um objeto. Por isso não usamos a
 * palavra 'value', que é mais especifica.
 */

//Vamos criar o método push, que adiciona um elemento ao fim da lista
class LinkedList {
	constructor() {
		this.head = undefined
		this.count = 0
	}
	
	push(element) {
		if (this.count > 0) {
			let current = this.head
			
			for (let i = 1; i < this.count; i++) {
				current = current.next
			}
			
			current.next = new Node(element)
		} else {
			this.head = new Node(element)
		}
		this.count += 1
	}
}

class Node {
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}