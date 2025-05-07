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

# Call the method to print the song lyrics
twinkle_twinkle.sing_me_a_song()
