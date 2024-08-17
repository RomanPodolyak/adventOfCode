from input import data as strings


def hasAtLeast3Vowels(string: str):
    vowels = ["a", "e", "i", "o", "u"]
    total = 0
    for vowel in vowels:
        total += string.count(vowel)
    return total >= 3


def hasDoubleLetter(string: str):
    for i in range(len(string) - 1):
        if string[i] == string[i + 1]:
            return True
    return False


def avoidsSpecificStrings(string: str):
    badStrings = ["ab", "cd", "pq", "xy"]
    for badString in badStrings:
        if badString in string:
            return False
    return True


def isANiceString(string, functions):
    for function in functions:
        if function(string) == False:
            return False
    return True


def printInfo(strings, testFunctions):
    niceStrings = 0
    for string in strings:
        if isANiceString(string, testFunctions):
            niceStrings += 1

    print(niceStrings)

    for string in strings:
        output = f"{string}\t"
        for function in testFunctions:
            output += f"{'x' if function(string) else ' '}\t"
        print(output)

    print(niceStrings)


if __name__ == "__main__":
    testFunctions = [hasAtLeast3Vowels, hasDoubleLetter, avoidsSpecificStrings]
    printInfo(strings, testFunctions)
