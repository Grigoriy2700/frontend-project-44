import { runGame } from '../../src/index.js'

const description = 'What is the result of the expression?'

function gameCalc() {
  let operators = ['-', '*', '+']

  const mathActions = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  }

  let an1 = Math.floor(Math.random() * 11)
  let an2 = Math.floor(Math.random() * 11)
  let operator = Math.floor(Math.random() * 3)

  let z = String(mathActions[operators[operator]](an1, an2)) // выражение
  let quest = ' ' + an1 + ' ' + operators[operator] + ' ' + an2 // собранный пример

  return [quest, z]
}

export function startCalc(nameUser) {
  runGame(description, gameCalc, nameUser)
}
