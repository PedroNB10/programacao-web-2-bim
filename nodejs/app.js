console.log("Hello, World!");

const cwd = process.cwd() // current working directory

console.log(process.version)
console.log(cwd);
console.log(process.version)

// console.log(process.env)

console.log(process.argv.slice(2)) // o slice é para remover os dois primeiros elementos do array

let argOperation = '-op'
let argOperand = "-opn"
const parameters = process.argv.slice(2) // o slice é para remover os dois primeiros elementos do array

if (!parameters.includes(argOperation) ) {
    console.log("Operation not found")
    return
}

if (!parameters.includes(argOperand) ) {
    console.log("Operands not found")
    return
}



let operation = process.argv[process.argv.indexOf(argOperation) + 1]

let operand1;
let operand2;

try{

     operand1 = Number(process.argv[process.argv.indexOf(argOperand) + 1])
     operand2 = Number(process.argv[process.argv.indexOf(argOperand) + 2])

    if (isNaN(operand1) || isNaN(operand2)){
        throw new Error("Invalid operands")
        
    }
}

catch (err){
    console.log(err)
}

switch(operation){
    case '+':
        console.log(operand1 + operand2)
        break
    case '-':
        console.log(operand1 - operand2)
        break
    case 'x':
        console.log(operand1 * operand2)
        break
    case '/':
        if (operand2 === 0){
            console.log("Division by zero")
            process.exit(1)
        }

        console.log(operand1 / operand2)
        break
    default:
        console.log("Invalid operation")
        break
}


