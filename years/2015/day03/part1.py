from input import data

moves = [x for x in data]

houses = {"0,0"}
currentHouse = [0, 0]

for move in moves:
    match move:
        case "^":
            currentHouse = [currentHouse[0], currentHouse[1] + 1]
        case "v":
            currentHouse = [currentHouse[0], currentHouse[1] - 1]
        case ">":
            currentHouse = [currentHouse[0] + 1, currentHouse[1]]
        case "<":
            currentHouse = [currentHouse[0] - 1, currentHouse[1]]

    houses.add(f"{currentHouse[0]},{currentHouse[1]}")

    # print(f"moving {move} to '{currentHouse[0]}, {currentHouse[1]}'")

if __name__ == "__main__":
    # print(houses)
    print(len(houses))
