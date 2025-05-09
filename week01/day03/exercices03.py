# EXERCICE 01   :
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Create three cat objects
cat1 = Cat("Emma", 3)
cat2 = Cat("Simba", 5)
cat3 = Cat("Luna", 2)


def find_oldest_cat(cat1, cat2, cat3):
    
    if cat1.age >= cat2.age and cat1.age >= cat3.age:
        return cat1
    elif cat2.age >= cat1.age and cat2.age >= cat3.age:
        return cat2
    else:
        return cat3


oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")
# EXERCICE 02   :


# Step 1: Create the Dog Class
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    
    def bark(self):
        print(f"{self.name} goes woof!")
    
    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

# Step 2: Create Dog Objects
davids_dog = Dog("Max", 60)
sarahs_dog = Dog("Rocky", 35)

# Step 3: Print Dog Details and Call Methods
print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

# Step 4: Compare Dog Sizes
if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger than {sarahs_dog.name}.")
elif sarahs_dog.height > davids_dog.height:
    print(f"{sarahs_dog.name} is bigger than {davids_dog.name}.")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name} are the same height.")




# EXERCICE 03   :

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


# Create an instance of the Song class with the lyrics of "Twinkle Twinkle Little Star"
twinkle_twinkle = Song(["Twinkle, twinkle, little star", 
                        "How I wonder what you are!", 
                        "Up above the world so high,", 
                        "Like a diamond in the sky.", 
                        "Twinkle, twinkle, little star,", 
                        "How I wonder what you are!"])
twinkle_twinkle.sing_me_a_song()




# EXERCICE 04   :


class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")
    
    def get_animals(self):
        print("Animals in the zoo:")
        if self.animals:
            for animal in self.animals:
                print(f"- {animal}")
        else:
            print("The zoo is empty.")
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")
    
    def sort_animals(self):
        # Sort animals alphabetically
        sorted_animals = sorted(self.animals)
        
        # Group animals by first letter
        animal_groups = {}
        for animal in sorted_animals:
            first_letter = animal[0]
            if first_letter in animal_groups:
                animal_groups[first_letter].append(animal)
            else:
                animal_groups[first_letter] = [animal]
        
        return animal_groups
    
    def get_groups(self):
        animal_groups = self.sort_animals()
        print("Animal groups:")
        for letter, animals in animal_groups.items():
            print(f"{letter}: {animals}")

# Step 2: Create a Zoo instance
ramat_gan_safari = Zoo("Ramat Gan Safari")

# Step 3: Use the Zoo methods
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Zebra")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Bear")  # Adding duplicate to test

ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.get_animals()

ramat_gan_safari.sort_animals()  # This returns the dictionary but doesn't print anything
ramat_gan_safari.get_groups()    # This prints the grouped animals