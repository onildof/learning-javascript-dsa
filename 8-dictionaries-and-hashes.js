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

