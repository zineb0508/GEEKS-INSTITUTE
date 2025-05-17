from fastapi import APIRouter, HTTPException
from ..database import get_connection
from ..models import UserCreate

router = APIRouter()

@router.post("/users")
def create_user(user: UserCreate):
    conn = get_connection()
    cursor = conn.cursor()

    query = """
    INSERT INTO users (username, email, full_name)
    VALUES (%s, %s, %s)
    RETURNING *;
    """
    cursor.execute(query, (user.username, user.email, user.full_name))
    new_user = cursor.fetchone()
    conn.commit()

    cursor.close()
    conn.close()

    return {"message": "User created successfully", "user": new_user}


@router.get("/users")
def get_users():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM users;")
    users = cursor.fetchall()

    cursor.close()
    conn.close()

    return {"users": users}
from fastapi import HTTPException

@router.delete("/users/{user_id}")
def delete_user(user_id: int):
    conn = get_connection()
    cursor = conn.cursor()

    query = "DELETE FROM users WHERE id = %s RETURNING *;"
    cursor.execute(query, (user_id,))
    deleted_user = cursor.fetchone()
    conn.commit()

    cursor.close()
    conn.close()

    if not deleted_user:
        raise HTTPException(status_code=404, detail="User not found")

    return {"message": "User deleted successfully", "user": deleted_user}



from fastapi import HTTPException

@router.put("/users/{user_id}")
def update_user(user_id: int, updated_user: UserCreate):
    conn = get_connection()
    cursor = conn.cursor()

    query = """
    UPDATE users
    SET name = %s, email = %s
    WHERE id = %s
    RETURNING *;
    """
    cursor.execute(query, (updated_user.name, updated_user.email, user_id))
    user = cursor.fetchone()
    conn.commit()

    cursor.close()
    conn.close()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return {"message": "User updated successfully", "user": user}
 
print(get_users)

