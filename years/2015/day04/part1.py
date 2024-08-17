import binascii
from input import data as secret
import hashlib as h


def hash(data: str) -> str:
    dataInBytes = data.encode()
    md5Obj: h._Hash = h.md5(dataInBytes, usedforsecurity=False)
    digestHex = md5Obj.hexdigest()
    return digestHex


attempt = 0
while True:
    toHash = secret + str(attempt)
    hashed = hash(toHash)
    checkStr = hashed[0:5]
    if checkStr == "00000":
        print(f"Found valid hash at attempt {attempt}")
        break
    attempt += 1
    if attempt >= 10000000:
        print("didn't find a valid hash after 10M attempts")
        break
