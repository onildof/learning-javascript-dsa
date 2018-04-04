/* Em javascript você não precisa setar o tamanho inicial de um array vazio. Simplesmente vá adicionando os itens (o array de javascript é dinâmico): */
var daysOfWeek = []
daysOfWeek[0] = 'sundae'
daysOfWeek[1] = 'mondae'
daysOfWeek[2] = 'tuesdae'

//Também pode inicializá-lo já com os elementos
var daysOfWeek = ['sundae', 'mondae', 'tuesdae']

/* Uma forma possível mas não recomendada de declarar um array é usando o construtor new Array() */

var daysOfWeek = new Array() //array vazio sem tamanho determinado
var daysOfWeek = new Array(3) //array vazio de tamanho 3
var daysOfWeek = new Array('sundae', 'mondae', 'tuesdae') //array inicializado com os elementos direto no construtor

/* para saber o tamanho do array use length */
console.log(daysOfWeek.length)

/* you can use console.log to print the entire array in most browsers */
console.log(daysOfWeek)

/* use the push method to add one or more elements to the end of the array */
daysOfWeek.push('wednesdae', 'thursdae')

/* and the unshift method to add one or more elements to the start of the array */
daysOfWeek.unshift('fridae', 'saturdae') //ele insere o 'saturdae' primeiro, então fica na ordem que você escrever aí

/* use pop to remove the element at the end of the array */
daysOfWeek.pop()

/* Use the shift method to remove an element from the start of the array */
daysOfWeek.shift()

/*
The shift and unshift methods allow an array to emulate a basic queue data structure, which is the subject of Chapter 4
The push and pop methods allow an array to emulate a basic stack data structure, which is the subject of the next chapter.
*/

/* Até agora aprendemos como adicionar ou remover elementos no início e fim do array. E quanto às posições intermediárias? */

//Use o splice para determinar a posição inicial e quantos elementos a partir dali se quer remover
daysOfWeek = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
daysOfWeek.splice(1,5) //remova os dias úteis

//Também use o splice para inserir elementos no array enumerando-os do terceiro parâmetro em diante
daysOfWeek.splice(1,0,"lundi","mardi","mercredi","jeudi","vendredi")

/*

ARRAYS BIDIMENSIONAIS

*/

var sorteio1 = [10,11,12,13,14,15]
var sorteio2 = [18,19,20,21,22,23]
var sorteios = [sorteio1, sorteio2]

//ou

var sorteios = []
sorteios[0][0] = 10
sorteios[0][1] = 11
sorteios[0][2] = 12
sorteios[0][3] = 13
sorteios[0][4] = 14
sorteios[0][5] = 15
sorteios[1][0] = 18
sorteios[1][1] = 19
sorteios[1][2] = 20
sorteios[1][3] = 21
sorteios[1][4] = 22
sorteios[1][5] = 23

/* concat: concatenação de múltiplos arrays */

var zero = 0
var positivenumbers = [1,2]
var negativenumbers = [-2,-1]
var numbers = negativenumbers.concat(zero, positivenumbers) //[-2,-1,0,1,2]

/* Instead of using fors to iterate arrays, we can use the built-in iterator methods. */
var isEven = function(x) {
	console.log(x)
	return (x % 2 == 0)
}

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//Iterating using the every method
numbers.every(isEven) //na primeira iteração every vai receber um false de isEven (1 não é par), e portanto nem vai iterar mais
//Every usa uma função para verificar uma condição até que a função retorne falso

//Iterando usando o método some
numbers.some(isEven) //vai parar de excutar na segunda iteração porque some é o contrário de every. Ele para quando a função parâmetro retorna true.

//Iterando usando o forEach vai iterar o array até o fim
numbers.forEach(isEven)

numbers.forEach(function (x) {
	console.log(`${x} ${x % 2 == 0}`)
})

//O método map itera usando a função dada e retorna um array com os resultados
var myMap = numbers.map(isEven)

//O método filter também retorna um array, mas com os elementos para os quais a função parâmetro deu true
var myEvenNumbers = numbers.filter(isEven)

/* O método reduce recebe uma função com os seguintes parâmetros:
	accumulator //é o valor retornado pela última execução da função, ou o initialValue
	currentValue //valor do elemento atual sendo processado no array
	currentIndex //índice do elemento atual sendo processado no array
	array //o array sobre o qual o reduce foi chamado (gambiarra)

Podemos usá-lo para a cada iteração retornar um valor e adicioná-lo a um acumulador, que será retornado quando o reduce terminar sua execução.
*/

numbers.reduce(function(accumulator, currentValue, currentIndex, array) {
	console.log(`accumulator ${accumulator}, currentValue ${currentValue}, currentIndex ${currentIndex}, arrayLength ${array.length}`)
	return accumulator + currentValue
}, 1000)

/*
Outros métodos
*/
var stringa = numbers.join() //cria uma string bonitinha "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15"
var indicedo10 = numbers.indexOf(10) //9
var ultimoPar = numbers.lastIndexOf(10) //compara o parâmetro dado com cada elemento do array usando comparação estrita ===. Retorna o último índice em que dá true.
var reverseNumbers = numbers.reverse() //inverte a ordem dos elementos
var unicodeSort = numbers.sort() //converte os elementos para string e ordena de acordo com o valor unicode. Pode aceitar uma compareFunction(a,b) como parâmetro.
//Quando compareFunction retorna -1, quer dizer que a<b. 0 são iguais e 1 a>b.
