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
