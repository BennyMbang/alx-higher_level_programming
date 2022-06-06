#!/usr/bin/python3
def print_reversed_list_integer(my_list=[]):
    if my_list is None:
        return
    num = reversed(my_list)
    for i in num:
        print("{:d}".format(i))
