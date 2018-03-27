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

/* O que dizem sobre as variáveis globais de Javascript? */
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
