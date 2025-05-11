# Provided base classes
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

#
class Siamese(Cat):
    def __init__(self, name, age, color):
        super().__init__(name, age)
        self.color = color  # new attribute specific to Siamese

    def purr(self):
        return f"{self.name} is purring softly with {self.color} eyes."

#  Step 2:
bengal_cat = Bengal("Leo", 3)
chartreux_cat = Chartreux("Misty", 5)
siamese_cat = Siamese("Luna", 2, "blue")

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

#  Step 3:
sara_pets = Pets(all_cats)

#  Step 4: 
sara_pets.walk()






# exercice 02   :


# Step 1: 
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}"
        elif self_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}"
        else:
            return f"The fight between {self.name} and {other_dog.name} is a tie"

# Step 2: 
dog1 = Dog("Rico", 3, 15)
dog2 = Dog("lassie", 4, 19)
dog3 = Dog("Hachiko", 5, 35)

# Step 3:
print(dog1.bark())
print(f"{dog2.name}'s run speed: {dog2.run_speed()}")
print(dog1.fight(dog2))
print(dog3.fight(dog1))


#exercice 04    :

class Person:
    def __init__(self, first_name, age, last_name=""):
        self.first_name = first_name
        self.age = age
        self.last_name = last_name

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []  # fixed name (was: 'member' or 'membre')

    def add_member(self, person):
        self.members.append(person)  # fixed 'membre' → 'members'

    def get_family_member(self):
        return [member.first_name for member in self.members]

    def born(self, first_name, age):
        new_member = Person(first_name, age, self.last_name)
        self.add_member(new_member)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print("No family member with that name found.")

    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        print("Members:")
        for member in self.members:
            print(f"- {member.first_name}, {member.age} years old")


my_family = Family("Tomms")

my_family.born("Alexa", 15)
my_family.born("Jack", 19)
my_family.born("David", 20)

print("\n-- Family Presentation --")

my_family.family_presentation()

print("\n--- Check Majority ---")

my_family.check_majority("Alexa")
my_family.check_majority("Jack")
my_family.check_majority("Unknown")





