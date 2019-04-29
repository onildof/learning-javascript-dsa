/* Linked List (Lista Ligada) é uma estrutura muito parecida com o array no
 * sentido de que seus elementos são armazenados de forma ordenada. Mas ao
 * contrário dos arrays, os elementos das listas ligadas não são armazenados
 * de forma sequencial na memória. Cada elemento contém, além de seu valor, um
 * ponteiro para o próximo elemento.
 *
 * Inserir ou remover elementos no início ou no meio de um array é caro porque
 * precisa-se shiftar todos os outros elementos. Na lista ligada é mais barato,
 * pois basta atualizar um ponteiro (mas não se engane. Não é O(1) porque
 * continua sendo necessário iterar desde a cabeça da lista para achar o
 * elemento a ser removido).
 *
 * Por outro lado, para acessar um elemento do array basta entrar com seu
 * índice; enquanto para a lista ligada é preciso iterar por todos os elementos,
 * usando os ponteiros desde a cabeça (head).
 *
 * Em suma, quando se quer adicionar e remover muitos elementos, a lista é
 * mais barata.
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

//Vamos criar o método push, que adiciona um elemento ao fim da lista ligada
class LinkedList {
	constructor() {
		this.head = undefined
		this.count = 0
	}
	
	push(element) {
		if (this.count > 0) {
			let current = this.head
			
			for(let i = 1; i < this.count; i++) {
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

//Vamos criar um método para remover um elemento de um índice da lista ligada
class LinkedList {
	constructor() {
		this.head = undefined
		this.count = 0
	}
	
	push(element) {
		if (this.count > 0) {
			let current = this.head
			
			for(let i = 1; i < this.count; i++) {
				current = current.next
			}
			
			current.next = new Node(element)
		} else {
			this.head = new Node(element)
		}
		
		this.count += 1
	}
	
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			if (index === 0) {
				this.head = this.head.next
			} else {
				let previous = undefined
				let current = this.head
				
				for(let i = 0; i < index; i++) {
					previous = current
					current = current.next
				}
				
				previous.next = current.next
			}
			
			this.count--
		}
	}
}

class Node {
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}
/* Em removeAt(index) o objeto em current será removido pelo garbage collector
 */

//Como todas as funções de lista ligada precisarão iterar desde a cabeça até o
//elemento que queremos, podemos isolar essa parte da função removeAt(index) e
//criar uma função auxiliar getElementAt(index)
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
		this.count++
	}
	
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			if (index === 0) {
				this.head = this.head.next
			} else {
				let previous = this.getElementAt(index - 1)
				let current = previous.next
				previous.next = current.next
			}
			
			this.count--
		}
	}
	
	getElementAt(index) {
		let node = undefined

		if (index >= 0 && index < this.count) {
			node = this.head
			
			for (let i = 1; i < index + 1; i++) {
				node = node.next
			}
		}
		
		return node
	}
}

class Node {
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}

//Agora uma função insert que põe num índice específico
class LinkedList {
	constructor() {
		this.head = undefined
		this.count = 0
	}
	
	push(element) {
		if (this.count > 0) {
			let last = this.getElementAt(this.count - 1)
			last.next = new Node(element)
		} else {
			this.head = new Node(element)
		}
		
		this.count += 1
	}
	
	removeElementAt(index) {
		if (index >= 0 && index < this.count) {
			if (index === 0) {
				this.head = this.head.next
			} else {
				let previous = this.getElementAt(index - 1)
				let current = previous.next
				previous.next = current.next
			}
			this.count--
		}
	}
	
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			let node = new Node(element)
			
			if (index === 0) {
				node.next = this.head
				this.head = node
			} else {
				let previous = this.getElementAt(index - 1)
				let current = previous.next
				node.next = current
				previous.next = node
			}
			
			this.count++
			return true
		}
		
		return false
	}
	
	getElementAt(index) {
		let node = undefined
		
		if (index >= 0 && index < this.count) {
			node = this.head
			
			for (let i = 1; i < index + 1; i++) {
				node = node.next
			}
		}
		
		return node
	}
}

class Node {
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}
/* Em insert retornamos um booleano para indicar se foi out of bounds */

// Função indexOf que retorna -1 se não for encontrado nó com o elemento
// e função toString
class LinkedList {
	constructor() {
		this.head = undefined
		this.count = 0
	}
	
	push(element) {
		if (this.count > 0) {
			let last = this.getElementAt(this.count - 1)
			last.next = new Node(element)
		} else {
			this.head = new Node(element)
		}
			
		this.count += 1
	}
	
	removeElementAt(index) {
		if (index >= 0 && index < this.count) {
			if (index === 0) {
				this.head = this.head.next
			} else {
				let previous = this.getElementAt(index - 1)
				let current = previous.next
				previous.next = current.next
			}
			
			this.count--
		}
	}
	
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			let node = new Node(element)
			
			if (index === 0) {
				node.next = this.head
				this.head = node
			} else {
				let previous = this.getElementAt(index - 1)
				let current = previous.next
				node.next = current
				previous.next = node
			}
			
			this.count++
			return true
		}
		
		return false
	}
	
	getElementAt(index) {
		let node = undefined
		
		if (index >= 0 && index < this.count) {
			node = this.head
			
			for (let i = 1; i < index + 1; i++) {
				node = node.next
			}
		}
		
		return node
	}
	
	indexOf(element) {
		let current = this.head
		
		for(let i = 0; i < this.count; i++) {
			if (current.element === element) {
				return i
			}
			
			current = current.next
		}
		
		return -1
	}
	
	toString() {
		let result = ''
		
		if (this.count === 0) {
			return result
		} else {
			let node = this.head
			result = `${node.element}`
			
			for(let i = 1; i < this.count; i++) {
				node = node.next
				result += `,${node.element}`
			}
			
			return result
		}
	}
}

class Node {
	constructor(element) {
		this.element = element
		this.next = undefined
	}
}

//DOUBLY LINKED LIST. Cada nó tem um ponteiro pro nó anterior
//e a classe tem um ponteiro para o último nó também
class DoublyLinkedList extends LinkedList {
	constructor() {
		super()
		this.tail = undefined
	}
	
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			let node = new DoublyNode(element)
			
			if (this.count === 0) {
				this.head = node
				this.tail = node
			} else {
				if (index === 0) {
					node.next = this.head
					this.head.prev = node
					this.head = node
				} else if (index > 0 && index < this.count) {
					let current = this.getElementAt(index)
					node.next = current
					node.prev = current.prev
					current.prev.next = node
					current.prev = node
				} else {
					this.tail.next = node
					node.prev = this.tail
					this.tail = node
				}
			}
			
			this.count += 1
			return true
		}
		
		return false
	}
	
	removeElementAt(index) {
		if (index >= 0 && index < this.count) {
			if (index === 0) {
				if (this.count === 1) {
					this.head = undefined
					this.tail = undefined
				} else {
					this.head = this.head.next
					this.head.prev = undefined
				}
			} else if (index === this.count - 1) {
				this.tail = this.tail.prev
				this.tail.next = undefined
			} else {
				let current = this.getElementAt(index)
				current.prev.next = current.next
				current.next.prev = current.prev
			}

			this.count -= 1
			return true
		}
		
		return false
	}
}

class DoublyNode extends Node {
	constructor(element, next, prev) {
		super(element, next)
		this.prev = undefined
	}
}

// Circular Linked Lists
class CircularLinkedList extends LinkedList {
	constructor() {
		super()
	}
	
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			let node = new Node(element)
			
			if (index === 0) {
				if (this.count === 0) {
					node.next = node
					this.head = node
				} else {
					node.next = this.head
					let tail = this.getElementAt(this.count - 1)
					tail.next = node
					this.head = node
				}
			} else if (index === this.count) {
				let tail = this.getElementAt(index - 1)
				tail.next = node
				node.next = this.head
			} else {
				let previous = this.getElementAt(index - 1)
				let current = this.getElementAt(index)
				node.next = current
				previous.next = node
			}
			
			this.count += 1
			return true
		}
		
		return false
	}
	
	removeElementAt(index) {
		if (index >= 0 && index <= this.count) {
			if (index === 0) {
				let tail = this.getElementAt(this.count - 1)
				this.head = this.head.next
				tail.next = this.head
			} else {
				if (this.count === 1) {
					this.head = undefined
				} else if (index === this.count - 1) {
					let previous = this.getElementAt(index - 1)
					previous.next = this.head
				} else {
					let previous = this.getElementAt(index - 1)
					let next = this.getElementAt(index + 1)
					previous.next = next
				}
			}
			this.count -= 1
			return true
		}
		
		return false
	}
}

//Sorted Linked Lists
//Ao invés de usar um algoritmo de ordenação, inserimos o elemento sempre na
//posição correta.
function defaultCompare(a, b) {
	if (a === b) {
		return 0
	}
	
	return a < b ? -1 : 1
}

class SortedLinkedList extends LinkedList {
	constructor(compareFn = defaultCompare) {
		super()
		this.compareFn = compareFn
	}
}
/*Se você não entregar uma função de comparação ao construtor, ele usará
 *a defaultCompare. A idéia é permitir que para objetos mais complexos,
 *o programador use uma função de comparação adequada na hora de construir a
 *lista ligada ordenada.
 */

//Para deixar o código do comparador mais legível (?) usaremos uma constante
//Compare para representar em texto os valores.
//O único método que modificaremos da classe LinkedList é o de inserir
const Compare = {
	LESS_THAN: -1,
	BIGGER_THAN: 1
}

function defaultCompare(a, b) {
	if (a === b) {
		return 0
	}
	
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

class SortedLinkedList extends LinkedList {
	constructor(compareFn = defaultCompare) {
		super()
		this.compareFn = compareFn
	}
	
	insert(element, index = 0) {
		if (this.count === 0) {
			return super.insert(element, 0)
		}
		
		const pos = this.getIndexNextSortedElement(element)
		return super.insert(element, pos)
	}
	
	getIndexNextSortedElement(element) {
		let current = this.head
		let i = 0
		
		for(; i < this.count; i++) {
			const comp = this.compareFn(element, current.element)
			
			if (comp === Compare.LESS_THAN) {
				return i
			}
		}
		
		return i
	}
}
/* Como é uma lista ordenada, o usuário não tem dizer sobre o index da inserção,
 * por isso fizemos index = 0 na assinatura da função insert.
 */

//É posível usar a lista ligada para implementar uma pilha, fila, ou deque
class StackLinkedList {
	constructor() {
		this.items = new DoublyLinkedList()
	}
	
	push(element) {
		this.items.insert(element, this.size())
	}
	
	pop() {
		if (this.isEmpty()) {
			return undefined
		}
		
		return this.items.removeElementAt(this.size() - 1)
	}
	
	isEmpty() {
		return this.items.isEmpty();
	}
	
	size() {
		return this.items.size();
	}
}