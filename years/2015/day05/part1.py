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


def isANiceString(string: str):
    return (
        hasAtLeast3Vowels(string)
        and hasDoubleLetter(string)
        and avoidsSpecificStrings(string)
    )


if __name__ == "__main__":
    niceStrings = 0
    for string in strings:
        if isANiceString(string):
            niceStrings += 1

    print(niceStrings)

    for string in strings:
        print(
            f"{string}\t{'x'if hasAtLeast3Vowels(string) else ' '}\t{'x' if hasDoubleLetter(string) else ' '}\t{'x' if avoidsSpecificStrings(string) else ' '}"
        )
