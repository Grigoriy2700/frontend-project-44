import readlineSync from "readline-sync";

export function runGame(game, generateData, nameUser ) {

    console.log(game)

    for (let i = 0; i < 3; i++) {

        const [question, answer] = generateData()

        console.log('Question:' + question)

        const userResponse = readlineSync.question('Your answer: ').toLowerCase()

        if (userResponse !== answer) {
            console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${answer}'`);
            console.log(`Let's try again, ${nameUser}!`);
            return; // Завершаем игру при  ошибке
        }
        console.log('Correct!')
    }
    console.log(`Congratulations, ${nameUser}!`);
}