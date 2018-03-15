/*
Use let instead of var to declare variables:
*/

let bygones = "bygones"

/*
Variable scope stuff (local, global) was obly introduced in Javascript through ES6.

ES6 also introduced the keyword const. Its behavior is the same as that of the keyword let, except you can't change the variable's value afterwards.
*/

const PI = 3.141592

/*
Template literals = create strings without the need to concatenate (you gotta use grave instead of quotes for this to work):
*/

console.log(`The number pi is ${PI}`)

/*
Template literals can also be used for multiline strings. There is no need to use \n anymore. Simply use Enter.
*/

console.log(`one line
two lines
three`);

/* The purpose of arrow functions is to simplify the syntax of functions in ES6. Consider this: */

var areaOfTheCircle = function circleArea(r) {
	var PI = 3.14
	var area = PI*r*r
	return area
}
console.log(areaOfTheCircle(2))

//we can simplify its syntax to:
let areaOfTheCircle2 = (r) => {
	const PI = 3.14
	let area = PI * r * r
	return area
}
console.log(areaOfTheCircle2(2))

//it can be even further simplified (but made harder to read). If the function has only one statement, then the return line can be omitted:

let areaOfTheCircle3 = (r) => 3.14 * r * r
console.log(areaOfTheCircle3(2))

//With ES6 it's also possible to define default parameter values for functions:

function sum(x=1,y=2,z=3)
{
	return x+y+z
}
console.log(sum(3,3))

//Não sei que porras é spread and rest operators

//Array destructuring é inicializar várias variáveis de uma vez. É substituir isso:

var x = 'a'
var y = 'b'

//por isso:

var [x, y] = ['a', 'b']

//E array destructuring também serve pra fazer swap de valores sem usar variável temporária
[x, y] = [y, x]

//property shorthand é usar isso:
var [x, y] = ['a', 'b']
var obj = {x, y}
console.log(obj)

//para substituir isso:
var x = 'a'
var y = 'b'
var obj = { x: x, y: y }
console.log(obj)

//method property is writing this:
var hello = {
	name: 'abcdef',
	printHello() {
		console.log('Hello')
	}
}
hello.printHello()

//instead of this:
var hello = {
	name: 'abcdef',
	printHello: function printHello() {
		console.log('Hello')
	}
}
hello.printHello()

/* In ES5, we created a class like this: 
*/
function Book(title, pages, isbn) { //{1}
	this.title = title
	this.pages = pages
	this.isbn = isbn
}
Book.prototype.printTitle = function(){
	console.log(this.title);
};

/* With ES6, we can simplify the syntax and use the following code: 
class Book { //{2}
	constructor(title, pages, isbn) {
		this.title = title
		this.pages = pages
		this.isbn = isbn
	}
	printIsbn() {
		console.log(this.isbn)
	}
}
*/
/* The code for the class Book declared from line {1} has the same effect and output as the code declared from line {2} as can be demonstrated below: */
let book = new Book('title', 'pag', 'isbn')
console.log(book.title)
book.title = 'new title'
console.log(book.title)

//Inheritance

class ITBook extends Book { //use the keyword extends
	constructor(title, pages, isbn, technology) {
		super(title, pages, isbn) //use the keyword super
		this.technology = technology
	}
	printTechnology() {
		console.log(this.technology)
	}
}

let jsBook = new ITBook('Jacascript Book', '200', '12344567890', 'Jacascript')
console.log(jsBook.title)
jsBook.printTechnology()

/* Working with getters and setters
With the new class syntax, it's also possible to create getter and setter functions for the class attributes. Although class attributes are not private
as in other object-oriented languages (the encapsulation concept), it is good to follow a naming pattern.
*/

class Person {
	constructor(name) {
		this._name = name
	}

	get name() {
		return this._name
	}
	
	set name(value) {
		this._name = value
	}
}

let lotrChar = new Person('Frodough')
console.log(lotrChar.name)
lotrChar.name = 'Sham'
console.log(lotrChar.name)
lotrChar._name = 'Blue Hedgehog'
console.log(lotrChar.name)

/* ES6 also has other functionalities, namely:
- iterators
- typed arrays
- Set
- Map
- WeakSet
- WeakMap
- modules
- tail calls
- Symbol

Some of those will be covered later in the book

You do not need to update your ES5 code to ES6 or ES7. It would only get easier to read. The old code will continue working as usual.*/
