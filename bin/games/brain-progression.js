import {runGame} from "../../src/index.js";

const description = 'What number is missing in the progression?'

function gameNumberPass(){


    let passEl = Math.floor(Math.random() * 10) + 1
    let massPass =generateQuest()

    function generateQuest(){
        let pass = Math.floor(Math.random() * 10) + 1
        let mass = [Math.floor(Math.random() * 10) + 1]
        for(let i = 0; i < 10; i++){
            mass.push(mass[i] + pass)
        }
        return mass
    }

    let elMass = String(massPass[passEl])
    massPass[passEl] = '..'
    let checkPass = massPass.join(' ')

    return [checkPass, elMass]
}

export function startNumberPass(nameUser){
    runGame(description, gameNumberPass, nameUser)
}