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
