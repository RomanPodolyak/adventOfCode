import input from "./input";

class Range {
    private _start: number
    private _end: number

    constructor(start: number, end: number) {
        this._start = start
        this._end = end
    }

    get start() {
        return this._start
    }
    get end() {
        return this._end
    }
    get length() {
        return this._end - this._start
    }

    isAInsideB(another: Range): boolean {
        return ((this.start >= another.start) && (this.end <= another.end))
    }

    static isOneInsideAnother(a: Range, b: Range): boolean {
        return (a.isAInsideB(b) || b.isAInsideB(a))
    }
}

const elfPairTasks =
    // divide initial string
    input.split('\n')
        // separate pairs of ranges
        .map(input => input.split(',')
            // separate range values
            .map(input => input.split('-')
                // parse range value strings to numbers
                .map(input => Number.parseInt(input))
            )
            // convert to range object
            .map(rangeValues => new Range(rangeValues[0], rangeValues[1]))
        )

const tasksInsideOneAnother = elfPairTasks
    .filter(tasks => Range.isOneInsideAnother(tasks[0], tasks[1]))
    .length

console.log(tasksInsideOneAnother);