import readlineSync from 'readline-sync'

export function geradeUngerade(nameUser) {

    let num; // Сгенерированное число
    let numBool; //приведенное сгенерированное число к булиевому типу
    let userAnswer; // Ответ пользователя булиев
    let user; // Ответ пользователя
    let noUs; // инверсия ответа пользователя при неверном ответе

    console.log("Игра четное или нечетное")

    function game() {
        for (let i = 0; i < 3;){
            genNum()
            console.log("Число " + num + " четное?")
            userInput()
            if (userAnswer === numBool) {
                console.log("Правильно!")
                i++

            } else {
                console.log("Ваш ответ " + user + " неправильный");
                console.log("Правильный ответ - " + noUs);
                console.log("Давай попробуем еще раз?!")
            }

        }
        console.log("Поздравляем " + nameUser +" вы ответили верно на все три вопроса")
    }

//ввод пользователя

    function userInput() {
        userAnswer = readlineSync.question('Yes or No ? : ').toLowerCase();
        user = userAnswer;
        console.log(user)
        inputValidation()
    }

//проверка пользовательского ввода

    function inputValidation() {
        if (userAnswer === 'yes' || userAnswer === 'no') {
            switch (userAnswer) {
                case 'yes' :
                    userAnswer = true
                    noUs = 'no';
                    break;
                case 'no' :
                    userAnswer = false
                    noUs = 'yes';
                    break;
            }
        } else {
            console.log('Неверный ввод, повторите...')
            console.log("Число " + num + " четное?")
            userInput()
        }
    }

//Генерация числа

    function genNum() {
        num = Math.floor(Math.random() * 11)
        numBool = num % 2 === 0;
    }

    game();

}