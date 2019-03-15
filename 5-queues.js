/* Queue (fila) é uma lista ordenada FIFO (assim como na vida real).
 * Como na fila de uma impressora, a adição de novos elementos é no fim (tail) e
 * a remoção de elementos é na frente (head).
 */

//Vamos criar uma classe Queue
class Queue {
	
}

//Agora vamos adicionar um construtor a essa classe. Novamente evitando arrays
//para não condenar todas as funções a uma complexidade no tempo O(n)
class Queue {
	constructor() {
		this.items = {}
		this.count = 0
		this.lowestCount = 0
	}
}
/* A implementação da fila é bem parecida com a pilha */

//Vamos criar o método que enfia gente na fila
class Queue {
	constructor() {
		this.items = {}
		this.count = 0
	}
	
	enqueue(item) {
		this.items[this.count++] = item
	}
}

//Vamos criar o método em que um elemento sai da fila
class Queue {
	constructor() {
		this.items = {}
		this.count = 0
		this.lowestCount = 0
	}
	
	enqueue(item) {
		this.items[this.count++] = item
	}

	dequeue() {
		if (this.count === this.lowestCount)
			return undefined
		
		const output = this.items[this.lowestCount]
		delete this.items[this.lowestCount]
		this.lowestCount++
		return output
	}
}
/* Precisamos adicionar ao construtor um índice para o primeiro elemento da fila
 * (lowestCount). Então o outro índice (count) aponta para o fim da fila (não
 * confunda fim da fila com último elemento. É DEPOIS do último elemento).
 */

//Vamos imprimir a fila
class Queue {
	constructor() {
		this.items = {}
		this.count = 0
		this.lowestCount = 0
	}
	
	enqueue(item) {
		this.items[this.count++] = item
	}
	
	dequeue() {
		if (this.count === this.lowestCount)
			return undefined
		
		const output = this.items[this.lowestCount]
		delete this.items[this.lowestCount]
		this.lowestCount++
		
		return output
	}
	
	toString() {
		let output = ``
		
		for (let i = this.lowestCount; i < this.count; i++)
		{
			output = `${output}\n${this.items[i]}`
		}
		
		return output
	}
}

//Como usar a classe:
const q = new Queue()
console.log(q.toString())
q.enqueue(8)
console.log(q.toString())
q.enqueue(4)
console.log(q.toString())
console.log(`dequeuing ${q.dequeue()}`)
console.log(q.toString())
console.log(`dequeuing ${q.dequeue()}`)
console.log(q.toString())

/* Deque não é uma fila nem uma pilha. Você pode tirar e inserir elementos nas
 * duas pontas. Deque = Double Ended Queue. Deques são usadas para o undo de
 * programas. O undo seria uma pilha se a memória fosse infinita (como não o é,
 * é necessário remover as operações mais antigas do outro lado).
 */

//Vamos construir a classe deque
class Deque {
}

//Vamos adicionar o construtor
class Deque {
	constructor() {
		this.items = {}
		this.count = 0
		this.lowestCount = 0
	}
}

//Funções para adicionar e remover no início e no fim da fila. E imprimir.
class Deque {
	constructor() {
		this.items = {}
		this.count = 0
		this.lowestCount = 0
	}
	
	addFront(item) {
		this.items[--this.lowestCount] = item
	}
	
	addBack(item) {
		this.items[this.count++] = item
	}
	
	removeFront(item) {
		let output
		
		if (this.count - this.lowestCount > 0) {
			output = this.items[this.lowestCount]
			delete this.items[this.lowestCount++]
		} else {
			output = undefined
		}
		
		return output
	}
	
	removeBack(item) {
		let output
		
		if (this.count - this.lowestCount > 0) {
			output = this.items[--this.count]
			delete this.items[this.count]
		} else {
			output = undefined
		}
		
		return output
	}
	
	toString() {
		let output = ``
		
		for (let i = this.lowestCount; i < this.count; i++) {
			output = `${output},${this.items[i]}`
		}
		
		return output
	}
}