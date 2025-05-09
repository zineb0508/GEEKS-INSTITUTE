  ## CHALLENGE :



class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            info += f"{animal} : {count}\n"
        info += "\n    E-I-E-I-0!"
        return info

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_list = []
        for animal in animal_types:
            count = self.animals[animal]
            if count > 1:
                animal_list.append(animal + 's')
            else:
                animal_list.append(animal)
        if len(animal_list) == 1:
            animals_str = animal_list[0]
        else:
            animals_str = ', '.join(animal_list[:-1]) + f" and {animal_list[-1]}"
        return f"{self.name}'s farm has {animals_str}."



if __name__ == "__main__":
    macdonald = Farm("McDonald")
    macdonald.add_animal('cow', 5)
    macdonald.add_animal('sheep')
    macdonald.add_animal('sheep')
    macdonald.add_animal('goat', 12)

    print(macdonald.get_info())
    print()  # just for spacing
    print(macdonald.get_animal_types())
    print(macdonald.get_short_info())

