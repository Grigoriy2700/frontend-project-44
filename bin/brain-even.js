#!/usr/bin/env node

import readlineSync from 'readline-sync'
import {greeting} from "../src/cli.js";

const nameUser = greeting()

function geradeUngerade(nameUser) {
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
    user = userAnswer
    console.log(user)
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

geradeUngerade(nameUser);