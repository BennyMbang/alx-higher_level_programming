#!/usr/bin/python3
for b in range(26):

    if b != 4 and b != 16:
        print("{:s}".format(chr(b + ord("a"))), end="")
