class Matrix {
    constructor(rows, cols) {
        this.matrix = []
        this.generateMatrix(rows, cols)

    }

    generateMatrix(numRows, numColumns) {
        let num = 1
        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                this.matrix[r].push(num++)
            }
        }
    }

    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }

    alter(r, c, v) {
        this.matrix[r][c] = v
    }

    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }

    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }

    findCoordinate(value) {
        let coor = {
            x: null,
            y: null
        }
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] == value) {
                    coor.x = j
                    coor.y = i
                    return coor
                }
            }
        }
    }
}

//1
// let m = new Matrix(3, 4)
// m.print()
// //prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */


// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

//2
// let m = new Matrix(3, 4)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}


class EmployeeMatrix extends Matrix {
    constructor() {
        super()
    }

    loadData(salaryData) {
        for (let salary of salaryData) {
            this.matrix.push([salary._id, salary.name, salary.department, salary.salary])
        }
    }

    getEmployees(department) {
        let depArr = []
        for (let i = 0; i < this.matrix.length; i++) {
            if (this.matrix[i][2] == department) {
                depArr.push(this.matrix[i][1])
            }
        }
        return depArr
    }

    getTotalSalary(department) {
        let depSal = 0
        for (let i = 0; i < this.matrix.length; i++) {
            if (this.matrix[i][2] == department) {
                depSal += this.matrix[i][3]
            }
        }
        return depSal
    }

    findRichest() {
        let maxSal = 0
        let richest = ""
        for (let i = 0; i < this.matrix.length; i++) {
            if (this.matrix[i][3] > maxSal) {
                maxSal = this.matrix[i][3]
                richest = this.matrix[i][1]
            }
        }
        return richest
    }
}
//3
let data = [{
        _id: "e10021",
        name: "Gillian",
        department: "Finance",
        salary: 2000
    },
    {
        _id: "e10725",
        name: "Tibor",
        department: "Design",
        salary: 1200
    },
    {
        _id: "e10041",
        name: "Anisha",
        department: "Finance",
        salary: 2300
    },
    {
        _id: "e10411",
        name: "Jakub",
        department: "Design",
        salary: 1600
    },
    {
        _id: "e11995",
        name: "Mar",
        department: "Design",
        salary: 1300
    },
    {
        _id: "e10732",
        name: "Nisha",
        department: "Design",
        salary: 1200
    }
]

// let m = new EmployeeMatrix()
// m.loadData(data)
// m.print()

//4
// console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
// console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

//5
// console.log(m.getTotalSalary("Finance")) //prints 4300
// console.log(m.getTotalSalary("Design")) //prints 5300

//6
// console.log(m.findRichest()) //prints Anisha

//7 + 8
class TicTacToe extends Matrix {
    constructor() {
        super()
    }

    loadBoard() {
        for (let r = 0; r < 3; r++) {
            this.matrix.push([])
            for (let c = 0; c < 3; c++) {
                this.matrix[r].push(".")
            }
        }
    }

    checkColumn(colNum) {
        let col = ""
        for (let i = 0; i < this.matrix.length; i++) {
            col += this.matrix[i][colNum]
        }
        return col
    }

    checkRow(rowNum) {
        let row = ""
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            row += this.matrix[rowNum][i]
        }
        return row
    }

    play(r, c, p) {
        p == 1 ? this.alter(r, c, "X") : this.alter(r, c, "O")
        let row = this.checkRow(r)
        let col = this.checkColumn(c)
        let p1w = "XXX"
        let p0w = "OOO"
        if ((row == p1w) || (row == p0w) ||
        (col == p1w) || (col == p0w))
        {
            console.log(`Congratulations Player ${p}`)
        }
    }
}

let board = new TicTacToe()
board.loadBoard()
// board.play(2, 2, 1)
// board.play(0, 0, 2)
// board.print()


board.play(2, 2, 1)
board.play(0, 0, 0)
board.play(0, 2, 1)
board.play(1, 0, 0)
board.play(1, 2, 1) //prints Congratulations Player 1
board.print()
//prints