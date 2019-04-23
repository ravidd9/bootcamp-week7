//myStack
// class Stack{
//     constructor(){
//         this.stack = {}
//         this.length = 0
//     }
//     push(item){
//         this.stack[this.length] = item
//         this.length++
//     }
//     isEmpty(){
//         if(this.length == 0){
//             return true
//         }
//         else{
//             return false
//         }
//     }
//     peek(){
//         return this.stack[this.length-1]
//     }
//     pop(){
//         this.stack[this.length-1] = null
//         this.length--
//     }
//     print(){
//         console.log(this.stack)
//     }
// }

//ArrStack
class Stack {
    constructor() {
        this.stack = []
        this.length = 0
    }

    print() {
        console.log(this.stack)
    }

    push(x) {
        this.stack[this.length] = x
        this.length++
    }
    
    isEmpty() {
        return this.length === 0
    }
    peek() {
        return this.isEmpty() ? null : this.stack[this.length - 1]
    }
    
    pop() {
        if (this.isEmpty()) {
            return null
        }
        this.length--
        return delete this.stack[this.length - 1] //maybe delete "-1"
    }
}

// let myStack = new Stack()
// console.log(myStack.isEmpty())    //true
// myStack.print()                    //[]
// myStack.push(2)      
// console.log(myStack.isEmpty())     //false
// myStack.push(4)      
// myStack.print()                    //[2,4]
// console.log(myStack.peek())        //4
// myStack.pop()
// myStack.pop()
// console.log(myStack.peek())       //null
// console.log(myStack.isEmpty())    //


//Exercises
//1
// class Queue{
//     constructor(){
//         this.queue = []
//         this.length = 0
//     }
//     enqueue(item){
//         this.queue.push(item)
//     }
//     isEmpty(){
//         return this.queue.length == 0 ? true : false
//     }
//     peek(){
//         return this.queue[0]
//     }
//     dequeue(){
//         let first = this.queue[0]
//         this.queue.splice(0,1)
//         return first
//     }
//     print(){
//         console.log(this.queue)
//     }
// }

// let q = new Queue()
// console.log(q.isEmpty())    //true
// q.print()                   //[]
// q.enqueue(2)
// console.log(q.isEmpty())    //false
// q.enqueue(4)
// q.print()                   //[4,2]
// console.log(q.peek())       //2
// q.dequeue()
// q.dequeue()
// console.log(q.peek())       //null
// console.log(q.isEmpty())    //true


//2 //not finished
class MinStack {
    constructor() {
        this.stack = []
        this.length = 0
        this.min = new Stack()
    }

    print() {
        console.log(this.stack)
    }

    push(x) {
        this.stack[this.length] = x
        this.length++
    }
    
    isEmpty() {
        return this.length === 0
    }
    peek() {
        return this.isEmpty() ? null : this.stack[this.length - 1]
    }
    
    pop() {
        if (this.isEmpty()) {
            return null
        }
        this.length--
        return delete this.stack[this.length]
    }
    getMin(){
        
    }
}