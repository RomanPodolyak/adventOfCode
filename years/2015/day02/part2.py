from part1 import measures


def getPerimeter(a, b):
    return 2 * a + 2 * b


def getVolume(a, b, c):
    return a * b * c


def getMinPerimeter(l, w, h):
    p1 = getPerimeter(l, w)
    p2 = getPerimeter(l, h)
    p3 = getPerimeter(w, h)
    p = min(p1, p2, p3)
    return p


total = 0
for measure in measures:
    l, w, h = measure
    total += getMinPerimeter(l, w, h) + getVolume(l, w, h)

print(total)
