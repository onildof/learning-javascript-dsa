
/* O protótipo Object tem o método hasOwnProperty. Esse método retorna um
 * booleano indicando se o objeto tem a propriedade especificada. Já o operador
 * in aceita tanto isso quanto a propriedade estar na cadeia de propriedades
 * do objeto (property chain).
 *
 * PROPERTY FUCKING CHAIN
 * A palavra chave class introduzida no ES-2015 é syntactical sugar. Javascript
 * continua prototype-based.
 *
 * A única construção de javascript que permite herança é object. Cada objeto em
 * javascript tem uma propriedade privada que carrega uma ligação para outro
 * objeto que é chamado seu protótipo (prototype).
 *
 * Esse objeto prototype tem, por sua vez, sua propriedade prototype. E assim
 * por diante, até que um objeto é atingido com null como sua propriedade. É
 * o elo final da corrente de protótipos (final link in the prototype chain).
 *
 * PROTOTYPAL INHERITANCE MODEL
 *
 * Quando tenta-se acessar a propriedade de um objeto, não só o objeto é varrido,
 * como o seu protótipo tb, e o protótipo do protótipo, e assim por diante até
 * que uma propriedade com esse nome seja encontrada, ou o final da corrente
 * de protótipos.
 *
 */

/* DEMONSTRAÇÃO DA CORRENTE DE PROPRIEDADES
 *
 * Seja uma função f. Criamos um objeto que é uma instância dessa função.
 */

let f = function() {
	this.a = 1 //this dentro de function? deve ser um jeito antigo de declarar classeq!
	this.b = 2
}

let o = new f() //construtor para função? sei lá que porra é essa

f.prototype.b = 3
f.prototype.c = 4

console.log(o.a) // 1
//o tem uma propriedade a? sim, e seu valor é 1
console.log(o.b) // 2
//o tem uma propriedade b? sim, e seu valor é 2
//o.[[Prototype]] tem uma propriedade b? também. Mas ela não é visitada
//(Property Shadowing)

//a e b são own properties de o
console.log(o.c) // 4
//o tem uma propriedade c? não, então buscaremos no protótipo
//o.[[Prototype]] tem uma propriedade c? Sim, e seu valor é 4
//c é uma inherited property de o
console.log(o.d) //undefined
//o tem uma propriedade d? não, então buscaremos no seu protótipo
//o.[[Prototype]] tem uma propriedade d? não, então buscaremos no seu protótipo
//o.[[Prototype]].[[Prototype]] é do tipo Object.prototype, e indica o fim da
//cadeia de protótipos. Por isso o.[[Prototype]].[[Prototype]].[[Prototype]] é
//null

/* Quando se diz que todos os objetos de javascript herdam de Object, significa
 * que cada objeto herda propriedades de uma instância de Object.prototype, que
 * fica lá no fim da property chain.
 *
 * valueOf() é uma função do Object.prototype. Ela transforma um objeto em
 * um tipo primitivo e retorna.
 */
function MyNumberType(n) {
	this.number = n
} //criamos uma classe MyNumberType, cujo construtor recebe um parâmetro para
//inicializar a propriedade this.number

MyNumberType.prototype.valueOf = function() {
	return this.number
}

const o = new MyNumberType(5)
console.log(o + 3) //o é transformado em primitivo usando a função valueOf de
//seu object.Prototype antes de ser somado com 3. Você raramente precisa chamar
//valueOf explicitamente. Javascript o invoca automaticamente quando encontra
//uma situação em que o valor primitivo do objeto é necessário. Você pode
//invocá-lo assim:
o.valueOf()

//Se você não determinar uma função valueOf para o protytype, o objeto será
//transformado em string "[object tipo]" quando valueOf for chamado

/* a função Object.prototype.hasOwnProperty(propriedade) retorna true se
 * propriedade for uma own property do objeto. Mas pode dar merda se o objeto
 * tiver uma propriedade hasOwnProperty overriding essa função de
 * Object.prototype */
var foo = {
	hasOwnProperty: function() {
		return false
	},
	bar: "Here be dragons"
}

foo.hasOwnProperty('bar') //false

/* a solução é chamar a função hasOwnProperty de outro objeto usando call, o
 * que lhe dá a chance de setar quem é o 'this'
 */
({}).hasOwnProperty.call(foo, 'bar') //true
 
 /* esse outro objeto pode ser o Object.prototype. E é o mais seguro a se fazer,
 pois outro objeto pode não herdar de Object.prototype ou ter alguma classe na
 sua property chain shadowando o método hasOwnProperty */
 Object.prototype.hasOwnProperty.call(foo, 'bar')

/* hasOwnProperty é a única coisa em javascript que lida com propriedades e não
 * atravessa a property chain */

var o = {a: 1};

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype. 
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var b = ['yo', 'whadup', '?'];

// Arrays inherit from Array.prototype 
// (which has methods indexOf, forEach, etc.)
// The prototype chain looks like:
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// Functions inherit from Function.prototype 
// (which has methods call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null

/* para ver a prototype chain de um objeto, imprima objeto.prototype
 Se não funcionar,  objeto.__proto__.
 Se não funcionar, Object.getPrototypeOf(instancia)*/

/* In short, prototype is for types, while Object.getPrototypeOf() is the same for instances.

[[Prototype]] is looked at recursively, i.e. a1.doSomething,
Object.getPrototypeOf(a1).doSomething,
Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething etc., until it's
found or Object.getPrototypeOf returns null.
*/
