import { list as fullList } from './list'

const listOfStringLists = fullList.split('\n\n')
const listOfLists = listOfStringLists.map(stringList => stringList.split('\n'))
const list = listOfLists.map(list => list.map(item => Number.parseInt(item)))
const totals = list.map(list => list.reduce((prev, current) => prev + current))
const max = totals.reduce((oldTotal, currentTotal) => currentTotal > oldTotal ? currentTotal : oldTotal)
console.log(max);
