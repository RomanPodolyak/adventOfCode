from input import data as rawData


def getArea(l, w, h):
    a1 = 2 * l * w
    a2 = 2 * l * h
    a3 = 2 * w * h
    a = a1 + a2 + a3
    return a


def getMinSquareArea(l, w, h):
    a1 = l * w
    a2 = l * h
    a3 = w * h
    a = min(a1, a2, a3)
    return a


semiRawData = rawData.split("\n")
data = [dataString.split("x") for dataString in semiRawData]

# this could have been done better
measures = []
for o in data:
    measure = []
    for s in o:
        measure.append(int(s))
    measures.append(measure)

total = 0
for measure in measures:
    l, w, h = measure
    total += getArea(l, w, h) + getMinSquareArea(l, w, h)

print(total)
