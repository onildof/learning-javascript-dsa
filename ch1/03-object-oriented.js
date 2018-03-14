/* Javascript objects are just collections of name-value pairs.
These are the ways of creating objects in javascript:
*/

var obj = new Object()
var obj2 = {}
var obj3 = {
	name: {
		first: 'Gandalf',
		last: 'the Grey'
	},
	realm: 'Middle Earth'
}

/*
All classes that we'll create in this book are Javascript objects, such as:
- Stack
- Set
- Linked List
- Dictionary
- Tree
- Graph

In javascript, classes are declared like functions. For good practice start them with an uppercase letter
*/

function Book(title, pages, isbn)
{
	this.title = title
	this.pages = pages
	this.isbn = isbn
}

//Now, to instantiate this class and access the object's attributes:

var book = new Book('title', 'pag', 'isbn')

console.log(book.title)
book.title = 'new title'
console.log(book.title)

//A javascript class can also contain functions. You can declare a function after the class has been declared:

Book.prototype.printTitle = function(){
	console.log(this.title)
}
book.printTitle()

//We can declare functions directly inside the class definiton as well:
function Book(title, pages, isbn)
{
	this.title = title
	this.pages = pages
	this.isbn = isbn
	this.printIsbn = function(){
		console.log(this.isbn)
	}
}
book.printIsbn();//WTF redeclarei a classe e usei um objeto da anterior e funcionou a função nova

/*
In the prototype example, the printTitle function will be shared among all the instances but only one copy in memory will be created.
When we use a class-based definition, each instance will have its own copy of the functions in memory.
However, you can only declare public functions and properties using the prototype method.
With a class-based definition, you can declare private functions and properties and the other methods inside the class can also access them.
*/
