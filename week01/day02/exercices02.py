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
# EXERCICE 04   :
import random
number = random.choice(list(range(1,101))) #Picks a random number from 1 to 100
numberr = random.choice(list(range(1, 101)))

print(number)
print(numberr)

if number == numberr:
    print("the mission is done"),
elif number <= numberr:
    print(f"{number} < {numberr}"),
else:
    print(f"{number} > {numberr}")
 # EXERCICE 07  :
import random 

def  get_random_temp() :

    return random.choice(list(range(-10, 41)))

def main() :
    temp = get_random_temp()
    
    print(f"The temperature right now is {temp}  degrees Celsius.")


    if temp == 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif  0 < temp < 16 :
        print("Quite chilly! Don’t forget your coat")
    elif 16 <= temp <= 23 :
        print("it's a nice day")
    elif 24 <= temp < 32 :
        print("it starts to began hot outside")
    elif 32 <= temp <= 40 :
        print("it's hot outside")
    else :
        print("no way")

main()
def get_random_temp(season):
    if season == "winter":
        return random.choice(list(range(-10, 17)))
    elif season == "spring":
        return random.choice(list(range(17,5, 34)))
    elif season == "summer":
        return random.choice(list(range(34, 41)))
    elif season == "autumn":
        return random.choice(list(range(5,6, 18)))   
    else:
        return random.choice(list(range(-10, 41)))  # Default full range

def main():

    season = input("Enter the season (winter, spring, summer, autumn): ").lower()

   
    temp = get_random_temp(season)
    
    print(f"The temperature right now is {temp}  degrees Celsius.")


    if temp == 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif  0 < temp < 16 :
        print("Quite chilly! Don’t forget your coat")
    elif 16 <= temp <= 23 :
        print("it's a nice day")
    elif 24 <= temp < 32 :
        print("it starts to began hot outside")
    elif 32 <= temp <= 40 :
        print("it's hot outside")
    else :
        print("no way")
main()


# exercice 08   :



    
Q1 = {"question": "What is Baby Yoda's real name?",
        "answer": "Grogu"},
    
Q2= {"question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"}
    
    
Q3={ "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"}
    
    
Q4= {"question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"}
Q5 ={ "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"}
    
    
Q6 = {"question": "What species is Chewbacca?",
        "answer": "Wookiee"}
    
data = [Q1, Q2, Q3, Q4, Q5, Q6 ]

correct = 0
incorrect = 0
wrong_answers = []


for item in data:
     user_answer = input(item["question"] + " ")
    
if user_answer.lower().strip() == item["answer"].lower().strip():
        print(f"correct! the answer  to '{item["question"]}' is indeed {item["answer"]}.")
        correct += 1
else:
        print(f"Oops! the correct answer to {item["question"]} is {item["answer"]}. ")
        incorrect += 1
wrong_answers.append({
            "question": item["question"],
            "user_answer": user_answer,
            "correct_answer": item["answer"]
        })


print(f"\nYou got {correct} correct answers and {incorrect} incorrect answers.")
print("\nWrong answers:")
for wrong in wrong_answers:
    print(f"Question: {wrong['question']}")
    print(f"Your Answer: {wrong['user_answer']}")
    print(f"Correct Answer: {wrong['correct_answer']}\n")







        


    
