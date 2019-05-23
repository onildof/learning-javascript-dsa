/* Recursion
 *
 * Every recursion needs a stopping point (base case).
 * 
*/

//import { defaultToString } from './LearningJavaScriptDataStructuresandAlgorithmsThirdEdition_Code/src/js/util.js'

function factorialIterative(n) {
	if (n < 0) {
		return undefined
	} else {
		let result = 1
		for (let i = n; i > 1; i--) {
			result = result * i
		}
		
		return result
	}
}

console.log(factorialIterative(5))

/*
 * O fatorial de n precisa do cálculo do fatorial de (n-1). Ou seja, (n-1)! é um
 * subproblema de n!
 *
 * O caso base (onde o cálculo para), é o fatorial de 1 ou de 0, que é 1.
 */

function factorialRecursive(n) {
	console.trace() //para imprimir a pilha
	if (n < 0) {
		return undefined
	} else if (n == 1 || n == 0) {
		return 1
	} else {
		return n*factorialRecursive(n-1)
	}
}

console.log(factorialRecursive(5))

/* A MALDITA STACK
 *
 * Sempre que usar recursão, pense na pilha (stack). Toda vez que uma função é
 * chamada, vai no topo da call stack. Quando usamos recursão, cada chamada de
 * função é empilhada no topo das outras. Aí quando o caso base retorna, é popada
 * da pilha e o resto vai sendo popado uma por uma.
 *
9-recursion.js:32 console.trace
factorialRecursive @ 9-recursion.js:32	//factorialRecursive(1) chamado
factorialRecursive @ 9-recursion.js:38	//factorialRecursive(2) esperando pelo factorialRecursive(1)
factorialRecursive @ 9-recursion.js:38	//factorialRecursive(3) esperando pelo factorialRecursive(2)
factorialRecursive @ 9-recursion.js:38	//factorialRecursive(4) esperando pelo factorialRecursive(3)
factorialRecursive @ 9-recursion.js:38	//factorialRecursive(5) esperando pelo factorialRecursive(4)
(anonymous) @ 9-recursion.js:42			//chamada console.log
 */

function fibonacciIterative(n) {
	if (n < 1) return 0
	if (n <= 2) return 1
	
	let fibMinus1 = 1
	let fibMinus2 = 1
	let fibN
	
	for (let i = 2; i < n; i++) {
		fibN = fibMinus1 + fibMinus2
		fibMinus2 = fibMinus1
		fibMinus1 = fibN
	}
	
	return fibN
}

function fibonacciRecursive(n) {
	if (n < 1) return 0
	if (n <= 2) return 1
	
	return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}

/* Memoização é uma técnica de otimização.
 * Basicamente é criar uma função recursiva dentro da função principal (que seria a recursiva)
 * usando um array da função principal como memória, para economizar
 * em recursões que já foram feitas.
 */
function fibonacciMemoization(n) {
	const memo = [0, 1] //temos um array com as respostas
	
	const fibonacci = (n) => { //criamos uma função auxiliar
		if (memo[n] != null) { //que usa a memória
			return memo[n]
		} else {
			return memo[n] = fibonacci(n - 1) + fibonacci(n - 2) //e recursiona a si mesma, usando a memória
		}
	}
	
	return fibonacci(n)
}

console.log(fibonacciMemoization(4))

/* Conclusão: a versão iterativa é mais rápida, mas a recursiva é mais fácil
 * de entender.
 */