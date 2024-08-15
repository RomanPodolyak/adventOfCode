from input import data

index = 0
floor = 0

for character in data:
    index += 1
    if character == '(':
        floor += 1
    else:
        floor -= 1
    if floor < 0:
        print(index)
        break