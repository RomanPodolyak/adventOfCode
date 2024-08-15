from part1 import moves

houses = {"0,0"}
santasTurn = True
santaLocation = [0, 0]
roboSantaLocation = [0, 0]

for move in moves:
    location = santaLocation if santasTurn else roboSantaLocation
    match move:
        case "^":
            location = [location[0], location[1] + 1]
        case "v":
            location = [location[0], location[1] - 1]
        case ">":
            location = [location[0] + 1, location[1]]
        case "<":
            location = [location[0] - 1, location[1]]
    santaLocation = location if santasTurn else santaLocation
    roboSantaLocation = location if not santasTurn else roboSantaLocation
    santasTurn = not santasTurn
    houses.add(f"{location[0]},{location[1]}")
    # print(
    #     f"{'santa' if santasTurn else 'roboSanta'} moving {move} to '{location[0]}, {location[1]}'"
    # )

if __name__ == "__main__":
    # print(houses)
    print(len(houses))
