import input from './input'

// first part
//types
type OpponentCode = 'A' | 'B' | 'C'
type YourCode = 'X' | 'Y' | 'Z'
type Hand = 'rock' | 'paper' | 'sissors'
type Result = 'win' | 'draw' | 'loss'
type OpponentHandCode = OpponentCode
type YourHandCode = YourCode
type Round = [OpponentHandCode, YourHandCode]

// prepare data
const rawRounds = input.split('\n')
const rounds = rawRounds.map(rawRound => rawRound.split(' ')) as Round[]

// dicts
const opponentHands: { [key in OpponentHandCode]: Hand } = {
    'A': 'rock',
    'B': 'paper',
    'C': 'sissors'
}
const yourHands: { [key in YourHandCode]: Hand } = {
    'X': 'rock',
    'Y': 'paper',
    'Z': 'sissors'
}
const handValues: { [key in Hand]: number } = {
    'rock': 1,
    'paper': 2,
    'sissors': 3
}
const resultValues: { [key in Result]: number } = {
    'win': 6,
    'draw': 3,
    'loss': 0
}
const opponentHandToWin: { [key in Hand]: Hand } = {
    'rock': 'sissors',
    'paper': 'rock',
    'sissors': 'paper'
}

// checks
function isWin(yourHand: Hand, opponentHand: Hand) {
    return opponentHandToWin[yourHand] === opponentHand
}

function isDraw(yourHand: Hand, opponentHand: Hand) {
    return yourHand === opponentHand
}

// calculation
const results: number[] = []
for (const round of rounds) {
    const [opponentHandCode, yourHandCode] = round
    const [opponentHand, yourHand] = [opponentHands[opponentHandCode], yourHands[yourHandCode]]
    const roundResult = isWin(yourHand, opponentHand) ? 'win' : (isDraw(yourHand, opponentHand) ? 'draw' : 'loss')
    const resultValue = resultValues[roundResult]
    const handValue = handValues[yourHands[yourHandCode]]
    const totalValue = resultValue + handValue
    results.push(totalValue)
}
const total = results.reduce((prev, curr) => prev + curr)
console.log(total);