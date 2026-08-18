import { runGame } from '../../src/index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no"'

function gameEven() {
  const num = Math.floor(Math.random() * 11)
  const question = String(num)
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no'

  return [question, correctAnswer]
}

export function startEven(nameUser) {
  runGame(description, gameEven, nameUser)
}

/*
export function geradeUngerade(nameUser) {
  let num // Сгенерированное число
  let numBool // приведенное сгенерированное число к булиевому типу
  let userAnswer // Ответ пользователя булиев
  let user // Ответ пользователя
  let noUs // инверсия ответа пользователя при неверном ответе

  console.log('Answer "yes" if the number is even, otherwise answer "no"')

  function game() {
    for (let i = 0; i < 3;) {
      genNum()
      console.log('Question:' + num )
      userInput()
      if (userAnswer === numBool) {
        console.log('Correct!')
        console.log(userAnswer)
        console.log(user)
        i++
      }
      else {
        console.log( "'" + user +"'" + 'is wrong answer ;(. Correct answer was' + "'" + noUs + "'")
        console.log('Let\'s try again, ' + nameUser + "!")
        break;
      }
    }
    console.log('Congratulations, ' + nameUser + '!')
  }

  // ввод пользователя

  function userInput() {
    userAnswer = readlineSync.question('Your answer:').toLowerCase()
    user = userAnswer //передаем ответ для изменения типа переменной
    inputValidation()
  }

  // проверка пользовательского ввода

  function inputValidation() {
    if (userAnswer === 'yes' || userAnswer === 'no') {
      switch (userAnswer) {
        case 'yes' :
          userAnswer = true
          noUs = 'no'
          break
        case 'no' :
          userAnswer = false
          noUs = 'yes'
          break
      }
    }
    else {
      console.log( "'" + user +"'" + 'is wrong answer ;(. Correct answer was' + "'" + noUs + "'")
      console.log('Let\'s try again, ' + nameUser + "!")
    }
  }

  // Генерация числа

  function genNum() {
    num = Math.floor(Math.random() * 11)
    numBool = num % 2 === 0
  }

  game()
}

*/
