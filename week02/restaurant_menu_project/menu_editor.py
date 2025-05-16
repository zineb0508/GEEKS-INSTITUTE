from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\nWhat would you like to do?")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show the Full Menu")
        print("(X) Exit")

        choice = input("Enter your choice: ").upper()

        if choice == 'V':
            name = input("Enter item name to view: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"Found: {item}")
            else:
                print("Item not found.")

        elif choice == 'A':
            add_item_to_menu()

        elif choice == 'D':
            remove_item_from_menu()

        elif choice == 'U':
            update_item_from_menu()

        elif choice == 'S':
            show_restaurant_menu()

        elif choice == 'X':
            print("\nExiting. Final Menu:")
            show_restaurant_menu()
            break

        else:
            print("Invalid option. Try again.")


def add_item_to_menu():
    name = input("Enter item name: ")
    try:
        price = int(input("Enter item price: "))
        item = MenuItem(name, price)
        item.save()
        print("Item added successfully.")
    except ValueError:
        print("Price must be a number.")


def remove_item_from_menu():
    name = input("Enter item name to delete: ")
    item = MenuItem(name, 0)
    try:
        item.delete()
        print("Item deleted successfully.")
    except:
        print("Error deleting item.")


def update_item_from_menu():
    old_name = input("Enter the name of the item to update: ")
    new_name = input("Enter new name: ")
    try:
        new_price = int(input("Enter new price: "))
        item = MenuItem(old_name, 0)
        item.update(new_name, new_price)
        print("Item updated successfully.")
    except ValueError:
        print("Price must be a number.")


def show_restaurant_menu():
    items = MenuManager.all_items()
    print("\n--- Restaurant Menu ---")
    for item in items:
        print(f"{item[1]} - ${item[2]}")

