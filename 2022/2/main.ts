import input from './input'
type OpponentHand = 'A' | 'B' | 'C'
type YourHand = 'X' | 'Y' | 'Z'
type Round = [OpponentHand, YourHand]
type RPS = 'rock' | 'paper' | 'sissors'
type Result = 'win' | 'draw' | 'loss'

// first part
// prepare data
const rawRounds = input.split('\n')
const rounds = rawRounds.map(rawRound => rawRound.split(' ')) as Round[]
const opponentHandNames: { [OpponentHand: string]: RPS } = {
    'A': 'rock',
    'B': 'paper',
    'C': 'sissors'
}
const yourHandNames: { [YourHand: string]: RPS } = {
    'X': 'rock',
    'Y': 'paper',
    'Z': 'sissors'
}
const handValues: { [RPS: string]: number } = {
    'rock': 1,
    'paper': 2,
    'sissors': 3
}
const roundValues: { [Result: string]: number } = {
    'win': 6,
    'draw': 3,
    'loss': 0
}
const opponentHandToWin: { [RPS: string]: RPS } = {
    'rock': 'sissors',
    'paper': 'rock',
    'sissors': 'paper'
}
function win(yourHand: YourHand, opponentHand: OpponentHand) {
    return opponentHandToWin[yourHandNames[yourHand]] === opponentHandNames[opponentHand]
}
function draw(yourHand: YourHand, opponentHand: OpponentHand) {
    return yourHandNames[yourHand] === opponentHandNames[opponentHand]
}
const results: number[] = []
for (const round of rounds) {
    const [opponentHand, yourHand] = round
    const handValue: number = handValues[yourHandNames[yourHand]]
    const roundResult = win(yourHand, opponentHand) ? 'win' : (draw(yourHand, opponentHand) ? 'draw' : 'loss')
    const roundValue = roundValues[roundResult]
    const resultValue = handValue + roundValue
    results.push(resultValue)
}
const total = results.reduce((prev, curr) => prev + curr)
console.log(total);