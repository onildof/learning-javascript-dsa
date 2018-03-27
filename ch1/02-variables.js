/* Javascript is not a strongly typed language.
In javascript we only use the keyword var.
The available types are numbers, strings, and booleans. Then undefined and null. Then arrays, dates, and regular expressions. Then Functions and Objects.
*/

var num = 1
num = 'Your mom' //you can do this (attribute a different type to the same variable). Not good practice, though.
var price = 1.5
var name = 'Packt'
var truth = true
var und;
var nullVar = null

/* We have three ways of outputting values in JavaScript:
	alert('text here') //outputs an alert window on the browser
	console.log('text here') //outputs on the console tab of the debug tool
	document.write('text here') //outputs the value directly on the html page
*/

document.write("num = "+num)
document.write("<br/>")
document.write("price = "+price)
document.write("<br/>")
document.write("name = "+name)
document.write("<br/>")
document.write("truth = "+truth)
document.write("<br/>")
document.write("und = "+und)
document.write("<br/>")
document.write("nullVar = "+nullVar)
document.write("<br/>")
document.write("<br/>")

/*
In javascript, global variables are evil. Avoid them when possible.
Os operadores == e != fazem uma conversão implícita dos operandos para um tipo comum,
o que pode ser imprevisível. Dê preferência aos === e !==.
http://conceptf1.blogspot.com.br/2014/01/javascript-triple-equals-vs-double-equals-operators.html
*/

console.log("NaN === NaN", NaN === NaN)
var person1 = {name:"John"}
var person2 = {name:"John"}
console.log("person1 == person2", person1 == person2) //why false? Because internally the interpreter does === when it sees two objects.
console.log("person1 === person2", person1 === person2) //false, different objects

//the typeof operator does NOT look like a function:
document.write("typeof num = "+typeof num)
document.write("<br/>")
document.write("typeof price = "+typeof price)
document.write("<br/>")
document.write("typeof name = "+typeof name)
document.write("<br/>")
document.write("typeof truth = "+typeof truth)
document.write("<br/>")
document.write("typeof und = "+typeof und)
document.write("<br/>")
document.write("typeof nullVar = "+typeof nullVar)
document.write("<br/>")
document.write("typeof [1,2,3] = "+typeof [1,2,3])
document.write("<br/>")
document.write("typeof {name:'John'} = "+typeof {name:'John'})
document.write("<br/>")
document.write("<br/>")

//Neither does the delete operator
var myObj = {name:'John', age:25}
console.log(myObj)
delete myObj.age
console.log(myObj)
delete myObj.name
console.log(myObj)

//Some implicit conversions to boolean
function testTruth(val)
{
	return val ? console.log('truthy') : console.log('falsy')
}

testTruth(true) //true
testTruth(false) //false
testTruth(new Boolean(false)) //object always returns true

testTruth('') //false
testTruth('Packt') //true
testTruth(new String('')) //object always returns true

testTruth(1) //true
testTruth(0) //false
testTruth(NaN) //false
testTruth(new Number(NaN)) //object always returns true

testTruth({}) //true

//There's no limit in the number of parameters that you can pass to a function, but it will only use what it's supposed to:

function output(parameter)
{
	console.log(parameter);
}

output('hello')
output('what', 'are', 'you', 'doing') //In this case, only the first argument is used. The rest is ignored.
