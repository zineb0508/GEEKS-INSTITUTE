from week02.day04.restaurant_menu.menu_item import MenuItem

# Create and save a new item to the menu
item = MenuItem('Burger', 35)
item.save()  # This will insert the 'Burger' item into the Menu_Items table

# Create another item (Pizza) and save it to the menu
item2 = MenuItem('Pizza', 50)
item2.save()  # This will insert the 'Pizza' item into the Menu_Items table

# Update the 'Burger' to 'Veggie Burger' with a new price
item.update('Veggie Burger', 37)  # Updates 'Burger' to 'Veggie Burger' with new price

# Fetch and print the updated item (Veggie Burger)
print(f"Updated Item: {item.name} - Price: ${item.price}")

# Now, delete the 'Veggie Burger' item from the menu (which is the one we updated)
item.delete()  # Deletes 'Veggie Burger' from the Menu_Items table
venv\Scripts\activate

# Optionally, delete the 'Pizza' item (this will delete the item you created initially)
# item2.delete()  # Uncomment this line to delete the Pizza item as well

