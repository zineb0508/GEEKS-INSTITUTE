


from fastapi import FastAPI, HTTPException
from typing import List
from app import database, models  # You import from your 'app' folder

app = FastAPI(title="User CRUD API")

@app.get("/users", response_model=List[models.User])
def get_users():
    conn = database.get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users;")
    users = cursor.fetchall()
    cursor.close()
    conn.close()
    return users
@app.post("/users", response_model=models.User)
def create_user(user: models.UserCreate):
    conn = database.get_connection()
    cursor = conn.cursor()
    try:
        cursor.execute(
            "INSERT INTO users (name, email) VALUES (%s, %s) RETURNING id, name, email;",
            (user.name, user.email)
        )
        new_user = cursor.fetchone()
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()
        conn.close()
    return new_user



from fastapi import FastAPI
from app.routers import users
 # dot means "from current folder app/routers/users.py"

app = FastAPI()

app.include_router(users.router)

