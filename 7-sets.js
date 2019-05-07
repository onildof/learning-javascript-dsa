/* Sets (Conjuntos) são estruturas de dados sequenciais que não aceitam valores
repetidos. Conjuntos têm as operações de união, intersecção e diferença.

Conjuntos obviamente não são ordenados.
*/
class Set {
	constructor() {
		this.items = {}
	}
}

//método has
class Set {
	constructor() {
		this.items = {}
	}
	
	has(element) {
		return element in this.items
	}
}
/*só pesquisa os labels*/
/* in é um operador de Javascript que verifica se o dado elemento é uma
 * propriedade do objeto items ou da sua property chain
 */

//uma forma melhor de implementar o método has é chamando o método hasOwnProperty
//de Object.prototype em cima do objeto items usando a chamada call
class Set {
	constructor() {
		this.items = {}
	}
	
	has(element) {
		return Object.prototype.hasOwnProperty.call(this.items, element)
	}
}
/* Poderíamos ter usado this.items.hasOwnProperty(element) para o mesmo efeito
 * porém algumas ferramentas (ESLint) xiam quando usamos esse código, porque nem
 * todo objeto herda de Object.prototype; e mesmo para os objetos que herdam de
 * Object.prototype, o método hasOwnProperty pode ser shadowado e o código não
 * funcionar como esperado. Por isso o mais seguro é usar
 * Object.prototype.hasOwnProperty.call
 *
 * Ver property_chain.js
 * */

//método add
class Set {
	constructor() {
		this.items = {}
	}
	
	has(element) {
		return Object.prototype.hasOwnProperty.call(this.items, element)
	}
	
	add(element) {
		if (!this.has(element)) {
			this.items[element] = element
			return true
		}
		
		return false
	}
}
/* element está sendo adicionado como chave e valor sei lá pq */

//métodos delete e clear
class Set {
	constructor() {
		this.items = {}
	}
	
	has(element) {
		Object.prototype.hasOwnProperty.call(this.items, element)
	}
	
	add(element) {
		if (!this.has(element)) {
			this.items[element] = element
			return true
		}
		
		return false
	}
	
	delete(element) {
		if (this.has(element)) {
			delete this.items[element]
			return true
		}
		
		return false
	}
	
	clear() {
		this.items = {}
	}
}

//métodos size, values, union e intersection
class Set {
	constructor() {
		this.items = {}
	}
	
	has(element) {
		return Object.prototype.hasOwnProperty.call(this.items, element)
	}
	
	add(element) {
		if (!this.has(element)) {
			this.items[element] = element
			return true
		}
		
		return false
	}
	
	delete(element) {
		if (this.has(element)) {
			delete this.items[element]
			return true
		}
		
		return false
	}
	
	clear() {
		this.items = {}
	}
	
	size() {
		return Object.keys(this.items).length
	}
	
	values() {
		return Object.values(this.items)
	}
	
	union(otherSet) {
		const unionSet = new Set()
		this.values().forEach(value => unionSet.add(value))
		otherSet.values().forEach(value => unionSet.add(value))
		
		return unionSet
	}
	
	intersection(otherSet) {
		const intersectionSet = new Set()
		this.values().forEach(value => {
			if (otherSet.has(value)) {
				intersectionSet.add(value)
			}
		})
		
		return intersectionSet
	}
}

//Vamos melhorar o intersection escolhendo o conjunto menor para ser iterado
class Set {
	constructor() {
		this.items = {}
	}
	
	has(element) {
		return Object.prototype.hasOwnProperty.call(this.items, element)
	}
	
	add(element) {
		if (!this.has(element)) {
			this.items[element] = element
			return true
		}
		
		return false
	}
	
	delete(element) {
		if (this.has(element)) {
			delete this.items[element]
			return true
		}
		
		return false
	}
	
	clear() {
		this.items = {}
	}
	
	size() {
		return Object.keys(this.items).length
	}
	
	values() {
		return Object.values(this.items)
	}
	
	union(otherSet) {
		const unionSet = new Set()
		this.values().forEach(value => unionSet.add(value))
		otherSet.values().forEach(value => unionSet.add(value))
		
		return unionSet
	}
	
	intersection(otherSet) {
		const intersectionSet = new Set()
		let smallerSet, biggerSet
		
		if (this.size() <= otherSet.size()) {
			smallerSet = this
			biggerSet = otherSet
		} else {
			smallerSet = otherSet
			biggerSet = this
		}

		smallerSet.values().forEach(value => {
			if (biggerSet.has(value)) {
				intersectionSet.add(value)
			}
		})
		
		return intersectionSet
	}
}

//Diferença
class Set {
	constructor() {
		this.items = {}
	}
	
	has(element) {
		return Object.prototype.hasOwnProperty.call(this.items, element)
	}
	
	add(element) {
		if (!this.has(element)) {
			this.items[element] = element
			return true
		}
		
		return false
	}
	
	delete(element) {
		if (this.has(element)) {
			delete this.items[element]
			return true
		}
		
		return false
	}
	
	clear() {
		this.items = {}
	}
	
	size() {
		return Object.keys(this.items).length
	}
	
	values() {
		return Object.values(this.items)
	}
	
	union(otherSet) {
		const unionSet = new Set()
		this.values().forEach(value => unionSet.add(value))
		otherSet.values().forEach(value => unionSet.add(value))
		
		return unionSet
	}
	
	intersection(otherSet) {
		const intersectionSet = new Set()
		let smallerSet, biggerSet
		
		if (this.size() <= otherSet.size()) {
			smallerSet = this
			biggerSet = otherSet
		} else {
			smallerSet = otherSet
			biggerSet = this
		}

		smallerSet.values().forEach(value => {
			if (biggerSet.has(value)) {
				intersectionSet.add(value)
			}
		})
		
		return intersectionSet
	}
	
	difference(otherSet) {
		const differenceSet = new Set()
		
		this.values().forEach(value => {
			if (!otherSet.has(value)) {
				differenceSet.add(value)
			}
		})
		
		return differenceSet
	}
}

//Subconjunto
class Set {
	constructor() {
		this.items = {}
	}
	
	has(element) {
		return Object.prototype.hasOwnProperty.call(this.items, element)
	}
	
	add(element) {
		if (!this.has(element)) {
			this.items[element] = element
			return true
		}
		
		return false
	}
	
	delete(element) {
		if (this.has(element)) {
			delete this.items[element]
			return true
		}
		
		return false
	}
	
	clear() {
		this.items = {}
	}
	
	size() {
		return Object.keys(this.items).length
	}
	
	values() {
		return Object.values(this.items)
	}
	
	union(otherSet) {
		const unionSet = new Set()
		this.values().forEach(value => unionSet.add(value))
		otherSet.values().forEach(value => unionSet.add(value))
		
		return unionSet
	}
	
	intersection(otherSet) {
		const intersectionSet = new Set()
		let smallerSet, biggerSet
		
		if (this.size() <= otherSet.size()) {
			smallerSet = this
			biggerSet = otherSet
		} else {
			smallerSet = otherSet
			biggerSet = this
		}

		smallerSet.values().forEach(value => {
			if (biggerSet.has(value)) {
				intersectionSet.add(value)
			}
		})
		
		return intersectionSet
	}
	
	difference(otherSet) {
		const differenceSet = new Set()
		
		this.values().forEach(value => {
			if (!otherSet.has(value)) {
				differenceSet.add(value)
			}
		})
		
		return differenceSet
	}
	
	isSubsetOf(otherSet) {
		let isSubset = true
		
		this.values().forEach(value => {
			console.log(`${otherSet.values()} has ${value} ?`)
			if (!otherSet.has(value)) {
				isSubset = false
			}
		})
		
		return isSubset
	}
}

//Subconjunto
class Set {
	constructor() {
		this.items = {}
	}
	
	has(element) {
		return Object.prototype.hasOwnProperty.call(this.items, element)
	}
	
	add(element) {
		if (!this.has(element)) {
			this.items[element] = element
			return true
		}
		
		return false
	}
	
	delete(element) {
		if (this.has(element)) {
			delete this.items[element]
			return true
		}
		
		return false
	}
	
	clear() {
		this.items = {}
	}
	
	size() {
		return Object.keys(this.items).length
	}
	
	values() {
		return Object.values(this.items)
	}
	
	union(otherSet) {
		const unionSet = new Set()
		this.values().forEach(value => unionSet.add(value))
		otherSet.values().forEach(value => unionSet.add(value))
		
		return unionSet
	}
	
	intersection(otherSet) {
		const intersectionSet = new Set()
		let smallerSet, biggerSet

		if (this.size() <= otherSet.size()) {
			smallerSet = this
			biggerSet = otherSet
		} else {
			smallerSet = otherSet
			biggerSet = this
		}

		smallerSet.values().forEach(value => {
			if (biggerSet.has(value)) {
				intersectionSet.add(value)
			}
		})
		
		return intersectionSet
	}
	
	difference(otherSet) {
		const differenceSet = new Set()
		
		this.values().forEach(value => {
			if (!otherSet.has(value)) {
				differenceSet.add(value)
			}
		})
		
		return differenceSet
	}
	
	isSubsetOf(otherSet) {
		let isSubset = true
		
		this.values().every(value => {
			console.log(`${otherSet.values()} has ${value} ?`)
			if (!otherSet.has(value)) {
				isSubset = false
				return false //esse retorno é do callback da função every, e não da função isSubsetOf
			}
			
			return true //esse retorno é do callback da função every, e não da função isSubsetOf
		})
		
		return isSubset
	}
}

const a = new Set()
const b = new Set()
a.add(1)
a.add(2)
a.add(3)
a.add(4)
a.add(5)
b.add(5)
b.add(6)
const unionSet = a.union(b)
const interSet = a.intersection(b)
const diffSet1 = a.difference(b)
const diffSet2 = b.difference(a)
console.log(unionSet.values())
console.log(interSet.values())
console.log(diffSet1)
console.log(diffSet2)
const c = new Set()
c.add(4)
c.add(5)
c.add(6)
console.log(b.isSubsetOf(c))
console.log(c.isSubsetOf(b))

//ES2015 has a Set class
const set = new Set()
set.add(1)
console.log(set.values()); // outputs @Iterator 
console.log(set.has(1)); // outputs true 
console.log(set.size); // outputs 1
set.delete(1)
/* uma diferençca importante da nossa implementação de Set é que este retorna
 * um objeto Iterator ao invés de um objeto array
 */

//A forma mais fácil de simular as operações de união, intersecção e diferença
//é usando o operador spread
//1. transforme o Set em array
//2. faça a operação
//3. transforme o array de volta em Set

const setA = new Set(); 
setA.add(1); 
setA.add(2); 
setA.add(3); 
 
const setB = new Set(); 
setB.add(2); 
setB.add(3); 
setB.add(4); 

//União
console.log(new Set([...setA, ...setB]))
/* O construtor da classe Set também aceita um array como parâmetro.
 * Mas obviamente ignora os valores repetidos
 * */

//Intersecção
console.log(new Set([...setA].filter(x => setB.has(x))))

//Diferença
console.log(new Set([...setA].filter(x => !setB.has(x))))

//Multi-sets ou bags fica pra outra vez.