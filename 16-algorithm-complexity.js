/*
 * COMPLEXIDADE NO TEMPO
 * Uma função de incremento tem complexidade constante. O(1)
 * Um for varrendo um array e executando uma função atômica tem complexidade O(n)
 * Dois fors aninhados dão uma complexidade de O(n2)
 * log(n) === n é igual a qual potência de 10?
 * log(1) = 0
 * log(10) = 1
 * log(100) = 2
 * log(1000) = 3
 * log(10000) = 4
 * então log(n) cresce bem devagar. É menor que n.
 * Então até agora temos em ordem O(1) < O(logn) < O(n) < O(n2)
 * Quem é maior? O(nlogn) ou O(n2)?
 *    1*log(1) = 0		1^2 = 1
 *   10log(10) = 10		10^2 = 100
 * 100log(100) = 200	100^2 = 10000
 * 1000log(1000) = 3000 1000^2 = 1000000
 *
 * Então temos que O(1) < O(logn) < O(n) < O(nlogn) < O(n2)
 *
 * Busca, inserção e deleção em estruturas de dados têm suas complexidades
 * no tempo e no espaço (Array/Stack/Queue, Linked List, Doubly Linked List,
 * Hash table, BST, AVL tree, Red Black tree, Binary heap).
 *
 * Grafos tb.
 *
 * Algoritmos de busca, ordenamento tb.
 *
 * TEORIA DA NP-COMPLETUDE
 * É sobre dizer que um algoritmo é eficiente.
 * Ele é eficiente se tiver complexidade O(n^k) para alguma constante k. E por
 * isso é chamado de polinomial (polinômio de grau k).
 * 
 * Existe outro conjunto de algoritmos chamado NP (polinomial não-determinístico).
 *
 * Não entendi pq P é subconjunto de NP.
 */