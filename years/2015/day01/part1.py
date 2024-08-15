from input import data

floor = 0

for character in data:
    if character == '(':
        floor += 1
    else:
        floor -= 1
        
print(floor)