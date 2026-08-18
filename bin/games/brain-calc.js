
import {runGame} from "../../src/index.js";

const description = 'What is the result of the expression?'

function gameCalc() {

    let operators = ['-', '*', '+']

    const mathActions = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y
    };

    let an1 = Math.floor(Math.random() * 11)
    let an2 = Math.floor(Math.random() * 11)
    let operator = Math.floor(Math.random() * 3)

    let z = String(mathActions[operators[operator]](an1, an2)) //выражение
    let quest = " " + an1 + ' ' + operators[operator] + ' ' + an2 //собранный пример

    return [quest, z]

}

export function startCalc(nameUser){
    runGame(description, gameCalc, nameUser)
}









/*
    console.log('What is the result of the expression?')

    function game( ) {
        for (let i = 0; i < 3;) {
            genNum()
            console.log('Question:' + quest )
            userInput()
            if (userParse === z) {
                console.log('Correct!')
                i++
            }
            else {
                console.log( "'" + user +"'" + 'is wrong answer ;(. Correct answer was' + "'" + z + "'")
                console.log('Let\'s try again, ' + nameUser + "!")
                break;
            }
        }
        console.log('Congratulations, ' + nameUser + '!')
    }


    function genNum() {
        let an1 = Math.floor(Math.random() * 11)
        let an2 = Math.floor(Math.random() * 11)
        let operator = Math.floor(Math.random() * 3)

        //расчет и хранение выражения
        const mathActions = {
            '+': (x, y) => x + y,
            '-': (x, y) => x - y,
            '*': (x, y) => x * y
        };

        z = mathActions[operators[operator]](an1,an2)

        quest = " " + an1 + ' ' +operators[operator] + ' ' + an2
    }

    function userInput() {
        user =  readlineSync.question('Your answer:')
        userParse = parseInt(user)
        inputValidation()

    }


 */


    function inputValidation() {
        let isValid = /^[0-9+\-*/.,()\s]*$/.test(user);
        if (isValid) {
            console.log('Correct!')

        }
        else if(isValid === NaN) {
            console.log( "'" + user +"'" + 'is wrong answer ;(. Correct answer was' + "'" + z + "'")
            console.log('Let\'s try again, ' + nameUser + "!")

        }
    }


