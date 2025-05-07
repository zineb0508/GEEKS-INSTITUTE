my_age  =   "20"
my_name =   'zineb'
print('my name ' + my_name + ", and i am "  + my_age + "years old")

my_name = "zineb"
my_age  = "56"
print(f'my name {my_name}. i am  {my_age}')

print(f"THE reuslte of 2 * 8 is {2 * 8}")




birthday_day = 1
birthday_month = 11
birthday_year = 2006

print("Hello, my date of birthday is {}/{}/{}".format(birthday_day, birthday_month, birthday_year))

birthday_day = 1
birthday_month = 11
birthday_year = 2006

print("Hello, my date of birthday is {}/{}/{}".format(birthday_day, birthday_month, birthday_year))

my_hobbies = "football, tennis, coding, "
if "coding" in my_hobbies :
    print("great")

number = int(input("enter a number between 1 and 100?")) 

if number < 1 or number > 100:
    print("number is out of range, please repeat!")

elif number %3 == 0 and number %5 == 0:
    print("FizzBuzz") 
elif number %3 == 0:
    print('Fizz')
elif number %5 == 0: 
    print("Buzz")
else:
    print("the number is not a multiple of 3 or 5")

my_name = "zineb"
my_age = 18
my_hobbies = "basketball"
my_list = [my_name, my_age, my_hobbies]
print(my_list[0])
print(my_list[-1])
print(my_list[2])

my_name = "zineb"
print(my_name[0])
# exercice01 :
my_hobbies = ["Eat","Play", "Sleep" ]
additional_hobbies = ["coding", "reflection"]
print(my_hobbies + additional_hobbies )

