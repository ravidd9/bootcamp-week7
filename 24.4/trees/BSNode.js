
class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(value){
        if(this.value == value){
            return true
        }else if(this.leftChild){
            return this.leftChild.findNode(value)
        }else if(this.rightChild){
            return this.rightChild.findNode(value)
        }else{
            return false
        }
    }

    findCommonParent(val1, val2){ //not working
        let com = this.value
        if(com == val1){
            return com
        }else if(this.leftChild.value == val1){
            this.leftChild.findCommonParent(val1, val2)
        }
    }
}

//1
// let bSTree = new BSNode()
// let arr = ["H", "E", "S", "G", "L", "Y", "I"]
// arr.forEach(letter => bSTree.insertNode(letter))
// // console.log(bSTree)
// //Use the following to test
// console.log(bSTree.findNode("H")) // should print true
// console.log(bSTree.findNode("G")) // should print true
// console.log(bSTree.findNode("Z")) // should print false
// console.log(bSTree.findNode("F")) // should print false
// console.log(bSTree.findNode("y")) // should print false - we didn't make the tree case sensitive!


//2 - not working
let bSTree = new BSNode()
let arr = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
arr.forEach(letter => bSTree.insertNode(letter))
// console.log(bSTree)




