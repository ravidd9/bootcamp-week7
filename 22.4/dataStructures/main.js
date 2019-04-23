class UniqueArray {
    constructor() {
        this.stuff = {}
        this.stuffArr = []
        this.length = 0
    }
    add(item) {
        if (this.exists(item) == false) {
            this.stuff[item] = this.length
            this.length++
            this.stuffArr.push(item)
        }
    }
    showAll() {
        console.log(this.stuffArr)
    }
    exists(item) {
        if(this.stuff[item] >= 0){
            return true
        }
        else{
            return false
        }
    }
    get(index) {
        if(this.exists(this.stuffArr[index])){
            return this.stuffArr[index]
        }
        else{
            return -1;
        }
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"