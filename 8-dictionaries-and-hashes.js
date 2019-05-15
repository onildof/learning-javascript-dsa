/* Dictionaries and Hashes
 *
 * Em um Conjunto (Set), só nos interessa o valor de cada elemento. Tanto é que
 * a chave de um elemento é igual ao seu valor ([key, key]). Em um Dictionary (ou Map),
 * armazenamos os elementos em pares [key, value]. Em Hash Tables é a mesma
 * coisa.
 *
 * Dictionary = Map = Symbol Table = Associative Array
 *
 * A classe que vamos implementar é baseada na implementação da estrutura Map do
 * ECMAScript 2015. Veja que é bem similar à nossa classe Set (mas ao invés de
 * armazenar um par [key, key], vamos armazenar um par [key, value]).
 * 
*/

import { defaultToString } from './LearningJavaScriptDataStructuresandAlgorithmsThirdEdition_Code/src/js/util.js'

/*class Dictionary {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn
		this.table = {}
	}
}*/

/* Assim como na classe Set, nós armazenamos os elementos da classe Dictionary
 * em um Object ao invés de um array.
 *
 * Vamos armazenar os pares [key, value] usando table[key] = {key, value}
 *
 * Vale lembrar que Javascript nos permite acessar as propriedades de um objeto
 * usando colchetes [] como se fosse um array.
 *
 * Em dicionários, o ideal é que a chave seja do tipo string e o valor pode ser
 * de qualquer tipo. Como Javascript não é fortemente tipada, não temos como
 * garantir que o objeto passado como key é uma string. Por isso, transformamos
 * esse objeto em string antes de usá-lo como key.
 *
 * Por padrão vamos usar a função defaultToString declarada no arquivo utils.js.
 * Ou seja, o parâmetro toStrFn do construtor é opcional.
 */

/*class Dictionary {
	constructor (toStrFn = defaultToString) {
		this.toStrFn = toStrFn
		this.table = {}
	}
	
	hasKey(key) {
		return this.table[this.toStrFn(key)] != null
	}
	
	set(key, value) {
		if (key != null && value != null) {
			const tableKey = this.toStrFn(key)
			this.table[tableKey] = new ValuePair(key, value)
			return true
		}
		
		return false
	}
}*/
//cada elemento do Dictionary será uma instância da classe ValuePair

/*class ValuePair {
	constructor(key, value) {
		this.key = key
		this.value = value
	}
	
	toString() {
		return `[#${this.key}: ${this.value}]`
	}
}*/

/* Nós só armazenamos um par [key, value] ao invés de simplesmente value porque
 * nós convertemos key para string quando a usamos como chave.
 *
 * O método toString da classe ValuePair é para facilitar a implementação do
 * toString da classe Dictionary, mais para a frente.
 */
/*class Dictionary {
	constructor (toStrFn = defaultToString) {
		this.toStrFn = toStrFn
		this.table = {}
	}
	
	hasKey(key) {
		return this.table[this.toStrFn(key)] != null
	}
	
	set(key, value) {
		if (key != null && value != null) {
			const tableKey = this.toStrFn(key)
			this.table[tableKey] = new ValuePair(key, value)
			return true
		}
		
		return false
	}
	
	remove(key) {
		if (this.hasKey(key)) {
			delete this.table[this.toStrFn(key)]
			return true
		}
		
		return false
	}
	
	get(key) {
		const valuePair = this.table[this.toStrFn(key)]
		return valuePair == null ? undefined : valuePair.value
	}
	
	keyValues() {
		return Object.values(this.table) //Evocamos o método values da classe Object
	}
	
	keys() {
		return this.keyValues().map(valuePair => valuePair.key)
	}
	
	values() {
		return this.keyValues().map(valuePair => valuePair.value)
	}
}*/

/* Aparentemente precisamos implementar um método forEach?
 * E um método forEach que para assim que o callback retorna false?
 * Pq não chamar de every?
 */
/*class Dictionary {
	constructor (toStrFn = defaultToString) {
		this.toStrFn = toStrFn
		this.table = {}
	}
	
	hasKey(key) {
		return this.table[this.toStrFn(key)] != null
	}
	
	set(key, value) {
		if (key != null && value != null) {
			const tableKey = this.toStrFn(key)
			this.table[tableKey] = new ValuePair(key, value)
			return true
		}
		
		return false
	}
	
	remove(key) {
		if (this.hasKey(key)) {
			delete this.table[this.toStrFn(key)]
			return true
		}
		
		return false
	}
	
	get(key) {
		const valuePair = this.table[this.toStrFn(key)]
		return valuePair == null ? undefined : valuePair.value
	}
	
	keyValues() {
		return Object.values(this.table) //Evocamos o método values da classe Object
	}
	
	keys() {
		return this.keyValues().map(valuePair => valuePair.key)
	}
	
	values() {
		return this.keyValues().map(valuePair => valuePair.value)
	}
	
	forEach(callbackFn) {
		const valuePairs = this.keyValues()
		for(let i = 0; i < valuePairs.length; i++) {
			const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
			
			if (result === false) {
				break
			}
		}
	}
	
	size() {
		return Object.keys(this.table).length
	}
	
	isEmpty() {
		return this.size() === 0
	}
	
	clear() {
		this.table = {}
	}
	
	toString() {
		if (this.isEmpty()) {
			return ""
		}
		
		const valuePairs = this.keyValues()
		let objString = `${valuePairs[0].toString()}`
		
		for(let i = 1; i < valuePairs.length; i++) {
			objString = `${objString}, ${valuePairs[1].toString()}`
		}
		
		return objString
	}
}*/

/*
console.log("test start")
let d = new Dictionary()
let nullshit = null
console.log(d.hasKey("koko"))	//false
console.log(d.set("koko", "monkey")) //true
console.log(d.set("nullshit", nullshit)) //false
console.log(d.hasKey("koko"))	//true
console.log(d.get("koko"))		//monkey
console.log(d.remove("harambe"))	//false
console.log(d.remove("koko"))	//true
console.log(d.get("koko"))		//undefined
d.set("a", "alfa")
d.set("b", "bravo")
d.set("c", "charlie")
console.log(d.keyValues()) //[ValuePair, ValuePair, ValuePair]
console.log(d.keys()) //["a", "b", "c"]
console.log(d.values()) //["alfa", "bravo", "charlie"]
d.forEach((key, value) => console.log(`forEach iteration:`, `[#${key}: ${value}]`)) //forEach stuff
console.log(d.size()) //3
console.log(d.isEmpty()) //false
console.log(d.clear()) //undefined
console.log(d.size()) //0
console.log(d.isEmpty()) //true
d.set("d", "delta")
d.set("e", "enemy")
d.set("f", "foxtrot")
console.log(d.toString()) //[#d: delta], [#e: enemy], [#e: enemy]
console.log("test end")
*/

/*
 * Agora aprenderemos sobre a classe HashTable, também conhecida como HashMap,
 * uma implementação hash da classe Dictionary
 *
 * Hashing é sobre retirar um valor de uma estrutura de dados no menor tempo
 * possível. Quando usamos uma função hash, não precisamos iterar outros índices
 * da estrutura de dados.
 *
 * Você aplica a função hash sobre a chave e obtém um valor que é usado como
 * índice na estrutura de dados. Ou seja, a partir da chave você tem como
 * automaticamente saber onde armazenar ou puxar o valor.
 *
 * A função hash aplicada a duas entradas diferentes pode resultar na mesma saída? Sim.
 * É por isso que os locais da estrutura de dados são chamados de baldes (buckets)
 * Então nessas horas de colisão se armazena mais de um valor no mesmo bucket.
 * Aí iteraríamos dentro do mesmo índice, de fato; para evitar isso, temos de,
 * baseados no domínio, escolher uma função hash boa que gere poucas colisões.
 */

class ValuePair {
	constructor(key, value) {
		this.key = key
		this.value = value
	}
	
	toString() {
		return `[#${this.key}: ${this.value}]`
	}
}

class HashTable {
	constructor(toStrFn = defaultToString) {
		this.toStrFn =  toStrFn
		this.table = {}
	}
	
	loseloseHashCode(key) {
		if (typeof key === 'number') {
			return key
		}
		
		const tableKey = this.toStrFn(key)
		let hash = 0
		for (let i = 0; i < tableKey.length; i++) {
			hash += tableKey.charCodeAt(i)
		}
		
		return hash % 37 //Esse módulo só serve para evitar números grandes que não caibam numa variável numérica
	}
	
	hashCode(key) {
		return this.loseloseHashCode(key)
	}
	
	/* A lógica de put é similar à de set da classe Dictionary. Mas a convenção
	 * para Hashtable é chamar essa função de put. Então tá.
	 */
	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key)
			this.table[position] = new ValuePair(key, value) //também vamos armazenar a chave para propósitos informacionais
			return true
		}
		
		return false
	}
	
	get(key) {
		const position = this.hashCode(key)
		const valuePair = this.table[position]
		
		return valuePair == null ? undefined : valuePair.value
	}
	
	remove(key) {
		const position = this.hashCode(key)
		const valuePair = this.table[position]
		
		if (valuePair != null) {
			delete this.table[position]
			return true
		}
		
		return false
	}
}

/* Então a diferença de HashTable para Dictionary é que ao invés de armazenarmos
 * o ValuePair na stringificação da key, passamos uma função hash na key para
 * obter o índice onde o armazenaremos.
 */

//Testes:
const hash = new HashTable()
hash.put("Marrocos", "Rabate")
hash.put("Argélia", "Argel")
hash.put("Tunísia", "Tunes")
console.log(hash.hashCode("Marrocos") + " - Marrocos")
console.log(hash.hashCode("Argélia") + " - Argélia")
console.log(hash.hashCode("Tunísia") + " - Tunísia")
console.log(hash.get("Marrocos"))
console.log(hash.get("Líbia"))
console.log(hash.remove("Marrocos"))
console.log(hash.get("Marrocos"))

/* Hash Table vs Hash Set
 * Em algumas linguagens de programação temos a estrutura Hash Set. É um Set que
 * para inserir, remover ou pegar elementos, usamos uma função hashCode. E ao
 * invés de inserirmos um par (key, value), inserimos só o value.
 */

/* Separate chaining
 * Cria uma lista ligada para cada posição da tabela. É a técnica mais simples
 * de lidar com colisões. A desvantagem é precisar de memória adicional fora da
 * instância HashTable
 */

class HashTableSeparateChaining {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn
		this.table = {}
	}
	
	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key)
			
			if (this.table[position] == null) {
				this.table[position] = new LinkedList()
			}
			
			this.table[position].push(new ValuePair(key, value))
			return true
		}
		
		return false
	}
	
	get(key) {
		const position = this.hashCode(key)
		const linkedList = this.table[position]
		
		if (linkedlist != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead()
			
			while(current != null) {
				if (current.element.key === key) {
					return current.element.value
				}
				
				current = current.next
			}
		}
		
		return undefined
	}
	
	remove(key) {
		const position = this.hashCode(key)
		const linkedList = this.table[position]
		
		if (linkedList != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead()
			
			while(current != null) {
				if (current.element.key === key) {
					linkedList.remove(current.element)
					
					if (linkedList.isEmpty()) {
						delete this.table[position]
					}
					
					return true
				}
				
				current = current.next
			}
		}
		
		return false
	}
}

/* Linear Probing
 * É outra forma de resolver as colisões da HashTable. Se chama linear porque
 * os valores são armazenados diretamente na tabela, e não numa estrutura
 * de dados separada.
 *
 * Se o índice estiver ocupado, armazenamos o par (key, value) no próximo
 * índice da tabela.
 *
 * Por isso não podemos simplesmente remover um elemento de uma posição na
 * tabela. Podemos usar uma flag no elemento (lazy or soft deletion), o que
 * gradualmente vai deteriorar o desempenho da hash table.
 *
 * A outra forma é remover o elemento e shiftar os outros.
 */

class HashTableLinearProbing {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn
		this.table = {}
	}
	
	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key)
			
			if (this.table[position] == null) {
				this.table[position] = new ValuePair(key, value)
			} else {
				let index = position + 1
				while (this.table[index] != null) {
					index++
				}
				this.table[index] = new ValuePair(key, value)
			}
			
			return true
		}
		
		return false
	}
	
	get(key) {
		const position = this.hashCode(key)
		
		if (this.table[position] != null) {
			if (this.table[position].key === key) {
				return this.table[position].value
			}
			
			let index = position + 1
			
			while (this.table[index] != null && this.table[index].key != key) {
				index++
			}
			
			if (this.table[index] != null && this.table[index].key === key) {
				return this.table[index].value
			}
		}
		
		return undefined
	}
	
	remove(key) {
		const position = this.hashCode(key)
		
		if (this.table[position] != null) {
			if (this.table[position].key === key) {
				delete this.table[position]
				this.verifyRemoveSideEffect(key, position)
				
				return true
			}
			
			let index = position + 1
			
			while (this.table[index] != null && this.table[index].key != key) {
				index++
			}
			
			if (this.table[index] != null && this.table[index].key === key) {
				delete this.table[index]
				this.verifyRemoveSideEffect(key, position)
				
				return true
			}
		}
		
		return false
	}
	
	verifyRemoveSideEffect(key, removedPosition) {
		const hash = this.hashCode(key)
		let index = removedPosition + 1
		
		while (this.table[index] != null) {
			const posHash = this.hashCode(this.table[index].key)
			
			if (posHash <= hash || posHash <= removedPosition) {
				this.table[removedPosition] = this.table[index]
				delete this.table[index]
				removedPosition = index
			}
			
			index++
		}
	}
}

/* Todas essas soluções prejudicam o desempenho da hash table. O ideal é
 * encontrar uma solução hash que evite colisões ao máximo.
 *
 * Uma boa função hash é a djb2:
 */

djb2HashCode(key) {
	const tableKey = this.toStrFn(key) //transformamos a chave em uma string
	let hash = 5831 //um número primo famoso
	
	for (let i = 0; i < tableKey.length; i++) {
		hash = (hash * 33) + tableKey.charCodeAt(i) //mudamos o número
	}
	
	return hash % 1013 //o número final é o módulo do menor primo maior que a tabela que queremos
}

/* ES2015 MAP CLASS
 *
 * A diferença entre esta e a nossa classe Dictionary é que os métodos values()
 * e keys() retornam um Iterator ao invés de um array. Outra é que nossa classe
 * Dictionary tinha um método size(), enquanto a classe nativa Map tem uma
 * propriedade size.
 */

const map = new Map()
map.set("Marrocos", "Rabate")
map.set("Argélia", "Argel")
map.set("Tunísia", "Tunis")
map.set("Líbia", "Tripoli")
console.log(map.has("Marrocos"))
console.log(map.size)
console.log(map.keys())
console.log(map.values())
console.log(map.get("Marrocos"))
console.log(map.delete("Marrocos"))
console.log(map.has(ob1))
console.log(map.get(ob1))
map.delete(ob1)

/* ES2015 WEAKMAP AND WEAKSET CLASSES
 *
 * Além das novas estruturas Map e Set, o ECMAScript2015 trouxe as versões
 * fracas dessas classes: WeakSet e WeakMap.
 *
 * As diferenças são que não existem métodos keys, values e entries, e que só
 * é possível usar objetos como chaves.
 *
 * A razão de ser dessas duas classes é desempenho.
 *
 * Como não há método keys, values, ou entries. Se você não souber a chave,
 * não tem como obter o valor.
 */

const map = new WeakMap()
const ob1 = { country: "Marrocos"}
const ob2 = { country: "Argélia"}
const ob3 = { country: "Tunísia"}
map.set(ob1, "Rabate")
map.set(ob2, "Argel")
map.set(ob3, "Tunis")
console.log(map.has(ob1))
console.log(map.get(ob1))
map.delete(ob1)
