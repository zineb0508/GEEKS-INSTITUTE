#exercice 03    :




# Step 1: 

from dog import Dog
import random

# Step 2: 
class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        all_dogs = ', '.join([self.name] + list(args))
        print(f"{all_dogs} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} is not trained yet!")

# Step 3: 
rico = PetDog("Rico", 3, 15)
lassie = PetDog("Lassie", 5, 20)
hachiko = PetDog("Hachiko", 4, 18)

rico.train()
rico.play("Lassie", "Hachiko")
rico.do_a_trick()
