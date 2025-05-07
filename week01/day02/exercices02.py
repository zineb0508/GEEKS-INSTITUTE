# EXERCICE 01   :

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
zipit = zip(keys, values)
print(list(zipit))

# EXERCICE 02   :

total_cost = 0
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


for name, age in family.items(): 
    print(f"{name} ({age} years old):")

if age <= 3:
    print("the ticket is free")
    price = 0
elif age >= 12:
    print("the ticket is for 15$")
    price = 15
else:
    print("the ticket is for 10")
    price = 10
 
total_cost += price 
print("The total cost for the movies is: $" + str(total_cost))

# EXERCICE 04  :

def describe_city(city, country="Japan"):
    print(f"{city} is in {country}")


describe_city("Tokyo")             
describe_city("Frankfurt", "Germany")    

# EXERCICE 05   :
def compare_numbers(user_number, fixed_number):
    if user_number == fixed_number:
        print("Congratulations! You guessed the correct number.")
    else:
        print("Oops! Try again.")
        print("Your number was:", user_number)
        print("The correct number was:", fixed_number)


compare_numbers(25, 42)

# EXERCICE 06   =
def make_shirt(size="L", message="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{message}'.")


make_shirt()


make_shirt(size="M")


make_shirt("S", "Got it")


make_shirt(message="do it", size="XL")



    
