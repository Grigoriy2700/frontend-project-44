import { runGame } from "../../src/index.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

function gamePrime() {

    function isPrime(num) {
        if (num <= 1) return false; // Числа <= 1 не простые
        if (num === 2) return true;  // 2 — простое число
        if (num % 2 === 0) return false; // Исключаем все четные числа

        // Проверяем нечетные делители до квадратного корня из num
        const boundary = Math.sqrt(num);
        for (let i = 3; i <= boundary; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let question = Math.floor(Math.random() * 10)
    let correctAnswer = isPrime(question) ? 'yes' : 'no'

    return [question,correctAnswer]
}

export function startPrime(nameUser){
    runGame(description, gamePrime, nameUser)
}