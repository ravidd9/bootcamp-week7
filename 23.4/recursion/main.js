//exercises
//1
// const facFun = function (num, fac = num) {
//     if (num == 1) {
//         return fac
//     }
//     num--
//     fac *= num
//     return facFun(num, fac)
// }

// console.log(facFun(5))


//2
// const reverseFunc = function(word, reversed = ""){
//     if (word.length == 0) {return reversed}
//     reversed+= word[word.length-1]
//     word = word.substring(0, (word.length-1))
//     return reverseFunc(word, reversed)
// }

// console.log(reverseFunc("hello"))


//3
// const arr1 = [1, 2, 3]
// const arr2 = []

// const swap = function(arr1, arr2){
//     if(arr1.length == 0) {return}
//     arr2.push(arr1.splice(0,1)[0])
//     return swap(arr1, arr2)
// }

// swap(arr1, arr2)
// console.log(arr1) //[]
// console.log(arr2) //[1, 2, 3]




