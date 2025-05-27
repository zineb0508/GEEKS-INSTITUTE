import psycopg2
from week02.day04.restaurant_menu.menu_item import MenuItem 

class MenuManager:

    @classmethod
    def get_by_name(cls, name):
        try:
            conn = psycopg2.connect(
                database="restaurant_menu",
                user="postgres",
                password="wac193758",
                host="localhost",
                port="5432"
            )
            cur = conn.cursor()
            cur.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
            result = cur.fetchone()
            cur.close()
            conn.close()

            if result:
                return {"id": result[0], "name": result[1], "price": result[2]}
            else:
                return None

        except Exception as e:
            print("Error:", e)
            return None

    @classmethod
    def all_items(cls):
        try:
            conn = psycopg2.connect(
                database="restaurant_menu",
                user="postgres",
                password="wac193758",
                host="localhost",
                port="5432"
            )
            cur = conn.cursor()
            cur.execute("SELECT * FROM Menu_Items")
            items = cur.fetchall()
            cur.close()
            conn.close()
            return items

        except Exception as e:
            print("Error:", e)
            return []



if __name__ == "__main__":
    item = MenuItem('Pizza', 40)
    item.save()
    print("Item saved!")


    item = MenuManager.get_by_name("Veggie Pizza")
    print("Found item:", item)

    items = MenuManager.all_items()
    print("All menu items:")
    for i in items:
        print(i)
