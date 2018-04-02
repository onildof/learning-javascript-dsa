/* Resumo 
Javascript é fortemente tipada? 
Que tipos de dados javascript tem?
Temos 3 formas de output valores em Javascript. Quais?
O que dizer sobre as variáveis globais de Javascript?

*/
/*

TIPOS E OPERADORES

*/


/* Javascript é fortemente tipada? */
//não

/* Que tipos de dados javascript tem? */
var integ = 1
var doubl = 1.0
var str = 'lalala'
var boo = true
var und; //undefined é uma variável que não foi definida
var nullVar = null; //não esqueça do null

/* Temos 3 formas de output valores em Javascript. Quais? */
alert('texto')
console.log('texto') //tem que apertar F12 e observar o console
document.write('texto') //cria o texto na própria página html

/* O que dizer sobre as variáveis globais de Javascript? */
//Devem ser evitadas ao máximo.

/* Quais operadores são especiais de javascript? */
console.log(integ === doubl) //o triplo igual
console.log(typeof integ) //o typeof
var myObj = {name:'John', age:25}
console.log(myObj)
delete myObj.age
console.log(myObj)

/* Quais as diferenças entre os operadores == e === ? */
//O que for verdadeiro para === também o é para ==. O que for falso para == também o é para ===.
//O operador === leva em conta o tipo.

//Expressões verdadeiras para ===
undefined === undefined
null === null

//Expressões verdadeiras apenas para ==
0 == false
"" == false
"" == 0 //dedutível das duas acima
null == undefined

//NaN não se mistura nem com NaN
NaN != NaN
NaN !== NaN

//null não é estritamente igual a undefined (mas é soltamente igual). E eles não se misturam com mais ninguém
null !== undefined
null == undefined
null != false
undefined != false

//objetos distintos nunca são iguais, mesmo que tenham os mesmos atributos
var john = {name: 'John', age: 25}
var johnny = {name: 'John', age: 25}
john != johnny
john !== johnny

/* Crie uma função que faça uma conversão implícita do parâmetro para booleano e exiba o resultado */
function isTrue(param)
{
	console.log(typeof param);
	console.log(param ? 'is true' : 'is false')
	console.log(' ')
}

isTrue(true)
isTrue(false)
isTrue(new Boolean(true))
isTrue(new Boolean(false))
isTrue('')
isTrue('Packt')
isTrue(new String('Packt'))
isTrue(1)
isTrue(0)
isTrue(NaN)
isTrue(new Number(NaN))
isTrue({})

/* Quantos parâmetros você pode passar para uma função? */
//Quantos quiser, mas a função só vai usar o número declarado
function lol(param)
{
	return param;
}

lol('hello')
lol('hello', 'there', '!')


/*

ORIENTAÇÃO A OBJETOS

*/

/* O que são objetos em javascript? */
//Objetos em javascript são bem simples. São apenas conjuntos de pares nome-valor

/* Quais são as formas de criar um objeto em javascript? */

var obj = new Object()
var obj2 = {}
var obj3 = {
	name: {
		first: 'Gandalf',
		last: 'the Grey'
	},
	realm: 'Middle Earth'
}

/* Saindo de objetos para classes: como declarar uma classe em javascript? */

//Em javascript, classes são declaradas como funções
function book(title, pages, isbn)
{
	this.title = title
	this.pages = pages
	this.isbn = isbn
}

/* Como instanciar uma classe? */

var book = new Book('title', 'pag', 'isbn')

/* Como acessar os atributos de uma instância? */

console.log(book.title)
book.title = 'new title'
console.log(book.title)

/* Como declarar uma função após a classe ser declarada? */
//Podes fazer uma função protótipo:
book.prototype.printTitle = function() {
	console.log(this.title)
}

/* Como chamar essa função? */
book.printTitle()

/* Como declarar funções dentro da declaração da classe? */
function buch(title, pages, isbn)
{
	this.title = title
	this.pages = pages
	this.isbn = isbn
	
	this.printTitle = function() {
		console.log(this.title)
	}
}
var buch = new buch('my title', 'my pag', 'my isbn')
buch.printTitle()

/* Existe diferença prática entre uma função protótipo e uma função declarada dentro da classe? */
// A função protótipo só tem uma cópia na memória e é compartilhada por todas as instâncias.

/* Ao escrever de acordo com a especificação ECMAScript6: */

/* O que se usa no lugar de var e qual a diferença? */

let bygones = "bygones"; //com let não se pode declarar a variável duas vezes

/* Existia resenha de escopo local e global em javascript antes do ECMAScript6? */
//Não.

/* Como se criava constante antes do ES6? */
//Não se criava. Agora se cria com a palavra chave const:
const PI = 3.141592

/* O que são template literals? */
//É o uso de strings com grave ao invés de aspas. Dá pra construir a string com variáveis sem ter de concatenar, e dar quebra de linha sem \n:
console.log(`pi = ${PI}`)
console.log(`quebra
de
linha`)

/* Arrow functions é uma simplificação ES6 da declaração de funções */
let areaOfCircle = function areaOfCircle(r) {
	const PI = 3.14
	return PI*r*r
}

let areaOfCircleArrowFunction = (r) => {
	const PI = 3.14
	return PI*r*r
}

/* Se você for autista, pode escrever a arrow function de um statement só de um jeito mais complicado de entender ainda: */
let areaOfCircleOneStatementFunction = (r) => 3.14*r*r

/* Valores padrão para parâmetros é outra complicação de javascript que só apareceu com o ES6 */
function sum(x=1,y=2,z=3)
{
	return x + y + z
}

/* Array destructuring o que é? */
let [a, b] = [1, 2] //inicializar várias variáveis de uma vez
[a, b] = [b, a] //fazer swap sem variável temp

/* Property shorthand o que é */
let obj = {a: a, b: b} //ao invés de escrever de um jeito que todo mundo entenda,
let obj2 = {a, b} //seja autista

/* Method property é substituir o que é normal: */
let bunda = {
	cu: 'cu',
	peido: function peido() {
		console.log('peidei')
	}
}
bunda.peido()

/* por algo mais autístico */

let rabo = {
	furico: 'furico',
	bufa() {
		console.log('bufei')
	}
}
rabo.bufa()

/* AGORA LÁ VÊM AS CLASSES */

//Compare o jeito ES5 com o ES6 de declarar uma classe nome com nome e sobrenome (duh)
function name(first, last)
{
	this.first = first
	this.last = last
}
name.prototype.fullName = function fullName() {
	return `${this.first} ${this.last}`
}

class name {
	constructor(first, last) {
		this.first = first
		this.last = last
	}

	fullName() {
		return `${this.first} ${this.last}`
	}
}

/* AGORA LÁ VEM A HERANÇA */

class bigname extends name {
	constructor(first, middle, last) {
		super(first, last)
		this.middle = middle
	}
}
	fullName() {
		return `${this.first} ${this.middle} ${this.last}`
	}
}

/* COMPLICANDO MAIS UM POUQUINHO COM GETTERS E SETTERS */

//Getters e setters só servem para florear mesmo porque classes em ECMA6 não têm atributos privados

class name {
	constructor(first, last) {
		this._first = first //o underline é apenas para testing purposes
		this._last = last
	}
	get first() {
		return this._first
	}

	set first(value) {
		this._first = value
	}
}

let onildo = new name("onildo", "ferraz")
onildo.first
onildo._first
onildo.first = "luciano"
onildo._first = "rodolfo"
