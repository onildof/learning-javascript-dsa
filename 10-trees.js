/* Arvoreze
 *
 * É uma estrutura de dados não-sequencial.
 * Muito útil para buscar informação de forma fácil.
 *
 * height of 3 = 4 levels (0 to 3). The tree with only one node has a height of 1
 *
 * An internal node is a node with child. An external node is aka a leaf.
 *
 * Qual a diferença de uma Binary Tree para uma Binary Search Tree? Na Binary
 * SEARCH Tree, os nós de menor valor são armazenados no lado esquerdo, e os de
 * maior valor do lado direito. Isso facilita a PESQUISA.
 * 
*/

/*
import { Compare, defaultCompare } from './LearningJavaScriptDataStructuresandAlgorithmsThirdEdition_Code/src/js/util.js'

class Node {
	constructor(key) {
		this.key = key //node value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor(compareFn = defaultCompare) {
		this.compareFn = compareFn //used to compare node values
		this.root = null
	}
	
	insert(key) {
		if (this.root == null) {
			this.root = new Node(key)
		} else {
			this.insertNode(this.root, key) //helper function
		}
	}
	
	insertNode(node, key) {
		if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			if (node.left == null) {
				node.left = new Node(key)
			} else {
				this.insertNode(node.left, key)
			}
		} else {
			if (node.right == null) {
				node.right = new Node(key)
			} else {
				this.insertNode(node.right, key)
			}
		}
	}
}
*/

/* Traversing a tree is performing an action on each node of the tree.
 * There are three possible orders of traversal: in-order, pre-order and post-order
 *
 * In-order traversal é do menor pro maior.
 */

/*

import { Compare, defaultCompare } from './LearningJavaScriptDataStructuresandAlgorithmsThirdEdition_Code/src/js/util.js'

class Node {
	constructor(key) {
		this.key = key //node value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor(compareFn = defaultCompare) {
		this.compareFn = compareFn //used to compare node values
		this.root = null
	}
	
	insert(key) {
		if (this.root == null) {
			this.root = new Node(key)
		} else {
			this.insertNode(this.root, key) //helper function
		}
	}
	
	insertNode(node, key) {
		if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			if (node.left == null) {
				node.left = new Node(key)
			} else {
				this.insertNode(node.left, key)
			}
		} else {
			if (node.right == null) {
				node.right = new Node(key)
			} else {
				this.insertNode(node.right, key)
			}
		}
	}
	
	inOrderTraverse(node) {
		if (node == null)
			node = this.root
		
		if (node.left != null) {
			this.inOrderTraverse(node.left)
		}
		
		console.log(node.key)
		
		if (node.right != null) {
			this.inOrderTraverse(node.right)
		}
	}
}

*/

/* Vamos melhorar esse inOrderTraverse para permitir que usemos qualquer função
 * nos nós ao invés de console.log()
 */
/*
	printNode(node) {
		console.log(node.key)
	}
	
	inOrderTraverse(callback) {
		this.inOrderTraverseNode(this.root, callback)
	}
	
	inOrderTraverseNode(node, callback) {
		if (node.left != null) {
			this.inOrderTraverseNode(node.left, callback)
		}
		
		callback(node.key)
		
		if (node.right != null) {
			this.inOrderTraverse(node.right, callback)
		}
	}
*/	
/* Vamos melhorar esse inOrderTraverse transformando as duas checagens de nulo
 * em uma só.
 */
/*
	printNode(node) {
		console.log(node.key)
	}
	
	inOrderTraverse(callback) {
		this.inOrderTraverseNode(this.root, callback)
	}
	
	inOrderTraverseNode(node, callback) {
		if (node != null) {
			this.inOrderTraverseNode(node.left, callback)
			callback(node)
			this.inOrderTraverseNode(node.right, callback)
		}
	}
*/	
/*
import { Compare, defaultCompare } from './LearningJavaScriptDataStructuresandAlgorithmsThirdEdition_Code/src/js/util.js'

class Node {
	constructor(key) {
		this.key = key //node value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor(compareFn = defaultCompare) {
		this.compareFn = compareFn //used to compare node values
		this.root = null
	}
	
	insert(key) {
		if (this.root == null) {
			this.root = new Node(key)
		} else {
			this.insertNode(this.root, key) //helper function
		}
	}
	
	insertNode(node, key) {
		if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			if (node.left == null) {
				node.left = new Node(key)
			} else {
				this.insertNode(node.left, key)
			}
		} else {
			if (node.right == null) {
				node.right = new Node(key)
			} else {
				this.insertNode(node.right, key)
			}
		}
	}
	
	printNode(node) {
		console.log(node.key)
	}
	
	inOrderTraverse(callback) {
		this.inOrderTraverseNode(this.root, callback)
	}
	
	inOrderTraverseNode(node, callback) {
		if (node != null) {
			this.inOrderTraverseNode(node.left, callback)
			callback(node)
			this.inOrderTraverseNode(node.right, callback)
		} //quando o node é null, chegamos no caso base, em que a recursão para.
	}
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.inOrderTraverse(tree.printNode)
*/

/*
 * Pre-Order Traversal imprime os pais antes dos filhos
 * Post-Order Traversal imprime os filhos antes dos pais
 */

import { Compare, defaultCompare } from './LearningJavaScriptDataStructuresandAlgorithmsThirdEdition_Code/src/js/util.js'

class Node {
	constructor(key) {
		this.key = key //node value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor(compareFn = defaultCompare) {
		this.compareFn = compareFn //used to compare node values
		this.root = null
	}
	
	insert(key) {
		if (this.root == null) {
			this.root = new Node(key)
		} else {
			this.insertNode(this.root, key) //helper function
		}
	}
	
	insertNode(node, key) {
		if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			if (node.left == null) {
				node.left = new Node(key)
			} else {
				this.insertNode(node.left, key)
			}
		} else {
			if (node.right == null) {
				node.right = new Node(key)
			} else {
				this.insertNode(node.right, key)
			}
		}
	}
	
	printNode(node) {
		console.log(node.key)
	}
	
	inOrderTraverse(callback) {
		this.inOrderTraverseNode(this.root, callback)
	}
	
	inOrderTraverseNode(node, callback) {
		if (node != null) {
			this.inOrderTraverseNode(node.left, callback)
			callback(node)
			this.inOrderTraverseNode(node.right, callback)
		}
	}
	
	preOrderTraverse(callback) {
		this.preOrderTraverseNode(this.root, callback)
	}
	
	preOrderTraverseNode(node, callback) {
		if (node != null) {
			callback(node)
			this.preOrderTraverseNode(node.left, callback)
			this.preOrderTraverseNode(node.right, callback)
		}
	}
	
	postOrderTraverse(callback) {
		this.postOrderTraverseNode(this.root, callback)
	}
	
	postOrderTraverseNode(node, callback) {
		if (node != null) {
			this.postOrderTraverseNode(node.left, callback)
			this.postOrderTraverseNode(node.right, callback)
			callback(node)
		}
	}
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.postOrderTraverse(tree.printNode)