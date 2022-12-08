import input from "./input";

// first part
type Bag = string[]
type FullBag = [Bag, Bag]

function getSameItemsFromLists<T>(lists: T[][]): T[] {
    const intersection =
        lists.reduce(
            (prevList, currList) => prevList.filter(
                item => currList.includes(item)
            )
        )
    const uniqueIntersection = Array.from(new Set(intersection))
    return uniqueIntersection
}

function getValue(item: string) {
    const rawValue = item.charCodeAt(0) // A is 65, a is 97
    const reducedValue = rawValue - 96 // A is -31, a is 1
    const correctedValue =
        reducedValue > 0 ? reducedValue : reducedValue + 58 // A is 27, a is 1
    return correctedValue
}

// process input
const rawFullBags = input.split('\n')
const bags: Bag[] = rawFullBags.map(rawFullBag => (rawFullBag.split('')))

// get unique items per bag
const fullBagLists = bags.map(
    fullBag => {
        const pairOfBags: FullBag = [
            fullBag.slice(0, (fullBag.length / 2)),
            fullBag.slice(((fullBag.length / 2)), fullBag.length)
        ]
        const pairOfItemSets = pairOfBags.map(bag => new Set(bag))
        const pairOfItemLists = pairOfItemSets.map(bagSet => Array.from(bagSet)) as FullBag
        return pairOfItemLists
    }
)

// get the same item in each fullBag
const sameItems = fullBagLists.map(fullBag => getSameItemsFromLists(fullBag)[0])

// get values
const sameItemsValues = sameItems.map(item => getValue(item[0]))

// get total value
const totalValue = sameItemsValues.reduce((prev, curr) => prev + curr)

console.log(totalValue)