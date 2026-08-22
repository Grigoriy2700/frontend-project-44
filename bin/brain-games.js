#!/usr/bin/env node

import { greeting } from '../src/cli.js'
import { startEven } from './games/brain-even.js'
import { startCalc } from './games/brain-calc.js'
import { startDivide } from "./games/brain-gcd.js";
import readlineSync from 'readline-sync'
import {startNumberPass} from "./games/brain-progression.js";
import {startPrime} from "./games/brain-prime.js";

const nameUser = greeting()

const games = ['Differences', 'Calculator', 'Divide', 'Number-Pass', 'Prime']

let index = readlineSync.keyInSelect(games, 'who?')

switch (index) {
  case 0:
    startEven(nameUser)
    break
  case 1:
    startCalc(nameUser)
    break
  case 2:
    startDivide(nameUser)
    break
  case 3:
    startNumberPass(nameUser)
    break
  case 4:
    startPrime(nameUser)
    break
}
