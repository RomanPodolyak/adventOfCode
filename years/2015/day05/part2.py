from input import data as strings
from part1 import printInfo


def firstWeirdRule(string: str):
    for i in range(len(string) - 3):
        if string[i : i + 2] in string[i + 2 :]:
            return True
    return False


def secondWeirdRule(string: str):
    for i in range(len(string) - 2):
        if string[i] == string[i + 2]:
            return True
    return False


testFunctions = [firstWeirdRule, secondWeirdRule]
printInfo(strings, testFunctions)
