import input from './input'

// first part
const rawElfLists = input.split('\n\n')
const elfStringLists = rawElfLists.map(elfStringList => elfStringList.split('\n'))
const elfLists = elfStringLists.map(elfList => elfList.map(elfListEntry => Number.parseInt(elfListEntry)))
const unsortedElfTotals = elfLists.map(elfList => elfList.reduce((prev, curr) => prev + curr))
const elfTotals = Array.from(unsortedElfTotals.values()).sort((prev, curr) => curr - prev)
const biggestElfTotal = elfTotals[0]
// console.log(biggestElfTotal)

//second part
const topThree = elfTotals.slice(0, 3)
const topThreeTotal = topThree.reduce((prev, curr) => prev + curr)
console.log(topThreeTotal)