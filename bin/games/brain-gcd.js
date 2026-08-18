import {runGame} from "../../src/index.js";

const description = 'Find the greatest common divisor of given numbers.'

function gameDivide(){

    function calculateGCD(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let number1 = Math.floor(Math.random() * 100)
    let number2 = Math.floor(Math.random() * 100)
    let question = ' ' + number1 + ' ' + number2
    let result = String(calculateGCD(number1, number2))

    return [question, result]
}

export function startDivide(nameUser){
    runGame(description, gameDivide, nameUser)
}