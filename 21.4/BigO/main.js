//exercises
//6
// let ages = [1,2,3,4,5,6,7,8,1]
// let counted = {}

// const findDuplicates = function(ages) {
//   for (let age of ages) {
//     counted[age] ? counted[age]++ : counted[age] = 1
//     counted[age] > 1 ? console.log("there is a duplicate"): null
//   }
//   console.log(counted)
// }

// findDuplicates(ages)


//7
// let allSalaries = {
//     ax01: {
//       name: "Ray",
//       age: 28,
//       salary: 1300
//     },
//     qs84: {
//       name: "Lucius",
//       age: 31,
//       salary: 840
//     },
//     bg33: {
//       name: "Taylor",
//       age: 18,
//       salary: 2700
//     }
//   }
//   const findEmployeeSalary = function(employeeID) {
//     console.log(allSalaries[employeeID].salary)
//   }
//   findEmployeeSalary("qs84")


//8
let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]

const findIndex = function (numbers, num) {
  let high = numbers.length - 1
  let low = 0
  let mid = 0

  while (low <= high) {
    mid = Math.floor((high+low) /2 )
    if ( numbers[mid] == num){
      return mid
    }else if(num > numbers[mid]){
      low = mid + 1
    }else{
      high = mid - 1
    }
  }
  return -1
}

let index = findIndex(numbers, 2630)
console.log(index)