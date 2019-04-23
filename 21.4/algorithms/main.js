//exercises
//1
// const printStars = function (num) {
//     let str = ""
//     for (let i = 1; i <= num; i++) {
//         str += "*"
//         console.log(str)
//     }
// }
// printStars(5)


//2
// const printBackwardsStars = function (num) {
//     let string = ""
//     for(let i =0; i < num; i++){
//         string+="*"
//     }
//     while (num > 0) {
//         console.log(string)
//         string = string.substring(0, string.length-1)
//         num--
//     }
// }
// printBackwardsStars(6)


//3
const printStarSeries = function (num, count) {
    for (let j = 0; j < count; j++) {
        let str = ""
        let n1 = num
        for (let i = 1; i <= num; i++) {
            str += "*"
            console.log(str)
        }
        while (n1 > 0) {
            str = str.substring(0, str.length - 1)
            console.log(str)
            n1--
        }
    }
}
printStarSeries(4,3)