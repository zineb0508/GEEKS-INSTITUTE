



from game import Game 

def get_user_menu_choice():
    print("\nMenu:")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")
    
    choice = input("Enter your choice (1/2/3): ").strip()
    
    if choice == '1':
        return 'play'
    elif choice == '2':
        return 'show'
    elif choice == '3':
        return 'quit'
    else:
        print("Invalid choice.")
        return None
    

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}
    
    while True:
        choice = get_user_menu_choice()  # Display menu and get user input
        
        if choice == 'play':  # Start a new game if user choose 'play'
            game = Game()
            result = game.play()
            results[result] += 1  # Update the score
        
        elif choice == 'show':  # Show scores if user choose 'show'
            print(results)
        
        elif choice == 'quit':  # Quit the program if user choose 'quit'
            print(results)
              # Exit the loop and end the program
            break
if __name__ == '__main__':
         main()

