#recursive function that calls itself
def recursiveFunction(count):
    if count >= 0:
        print(count)
        count = count - 1
        #here is where the function calls itself again 
        recursiveFunction(count)
    else: 
        print("Boom!")

#invoking the function
recursiveFunction(10)