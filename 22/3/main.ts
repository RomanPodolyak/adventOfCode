import input from "./input";

type Bag = string[]
type FullBag = [Bag, Bag]

// process input
const rawFullBags = input.split('\n')
const fullBags: FullBag[] = rawFullBags.map(rawFullBag => (rawFullBag.split('')))

// get unique items per bag
const fullBagLists = fullBags.map(
    fullBag => {
        const pairOfBags: FullBag = [
            fullBag.slice(0, (fullBag.length / 2)),
            fullBag.slice(((fullBag.length / 2)), fullBag.length)
        ]
        const pairOfItemSets = pairOfBags.map(bag => new Set(bag))
        const pairOfItemLists: FullBag = pairOfItemSets.map(bagSet => Array.from(bagSet))
        return pairOfItemLists
    }
)

// get the same item in each fullBag
const sameItems = fullBagLists.map(fullBag => {
    const [leftBag, rightBag] = fullBag
    const sameItemList = leftBag.filter((item) => rightBag.includes(item))
    const sameItem = sameItemList[0]
    return sameItem
})

// get values
const sameItemsValues = sameItems.map(item => {
    const rawValue = item.charCodeAt(0); // A is 65, a is 97
    const reducedValue = rawValue - 96; // A is -31, a is 1
    const correctedValue =
        reducedValue > 0 ? reducedValue : reducedValue + 58; // A is 27, a is 1
    return correctedValue;
});

const totalValue = sameItemsValues.reduce((prev, curr) => prev + curr)

console.log(totalValue)