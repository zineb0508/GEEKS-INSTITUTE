# exercice01 :
print("Hello world\nHello world\nHello world\nHello world")

# exercice02 :
print((99**3) * 8)

# exercice03  :
name = input('What is your name? ') 
if name == "simon":
    print("Hey Simon! You're a legend!")
elif name == "zineb":
    print("Zineb, such a powerful name!")
else:
    print("Welcome, glad to have you here!")

# exercice04  :
height = int(input('what is your height in centimeters?'))
if height >= 145:
    print("your height is enough for the ride")
else :
    print("oh no,you might need to grow  a little more to be able to go on the ride.")

# exercice05  :
my_fav_numbers = {4, 8, 17}
my_fav_numbers.add(6)
my_fav_numbers.add(12)
my_fav_numbers.remove(12)

friend_fav_numbers = {1, 5, 9}

our_fav_numbers = my_fav_numbers.copy()
our_fav_numbers.update(friend_fav_numbers)

print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)

# exercice07 :

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")


basket.remove("Blueberries")


basket.append("Kiwi")


basket.insert(0, "Apples")


print(basket.count("Apples"))
basket.clear()
print(basket)
 #exercice08 :

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
    
finished_sandwiches = []
for sandwich in sandwich_orders:
    print(f"I made your {sandwich}.")
    finished_sandwiches.append(sandwich)

print("Finished sandwiches:", finished_sandwiches)


