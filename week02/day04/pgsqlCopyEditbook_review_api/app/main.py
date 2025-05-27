
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

from app import models, database, crud, dependencies, schemas
from app.auth import router as auth_router
from app.middleware import AuthMiddleware

# ✅ Create all tables from models (runs once at startup)
models.Base.metadata.create_all(bind=database.engine)

# ✅ FastAPI instance
app = FastAPI(title="Book Review API")

# ✅ Add custom JWT middleware
app.add_middleware(AuthMiddleware)

# ✅ Include auth routes (/signup, /login)
app.include_router(auth_router)

# ----------------------------------------
# 📘 BOOK ROUTES
# ----------------------------------------

@app.get("/books")
def list_books(db: Session = Depends(database.get_db)):
    return crud.get_all_books(db)

@app.post("/books")
def create_book(
    book: schemas.BookCreate,
    db: Session = Depends(database.get_db),
    user=Depends(dependencies.require_admin)
):
    return crud.create_book(book, db)

@app.put("/books/{book_id}")
def update_book(
    book_id: int,
    book: schemas.BookCreate,
    db: Session = Depends(database.get_db),
    user=Depends(dependencies.require_admin)
):
    return crud.update_book(book_id, book, db)

@app.delete("/books/{book_id}")
def delete_book(
    book_id: int,
    db: Session = Depends(database.get_db),
    user=Depends(dependencies.require_admin)
):
    return crud.delete_book(book_id, db)

# ----------------------------------------
# 📝 REVIEW ROUTES
# ----------------------------------------

@app.post("/books/{book_id}/reviews")
def add_review(
    book_id: int,
    review: schemas.ReviewBase,
    db: Session = Depends(database.get_db),
    user=Depends(dependencies.get_current_user)
):
    review_data = schemas.ReviewCreate(content=review.content, book_id=book_id)
    return crud.create_review(review_data, user["user_id"], db)

@app.get("/books/{book_id}/reviews")
def get_reviews(book_id: int, db: Session = Depends(database.get_db)):
    return crud.get_reviews_for_book(book_id, db)

@app.delete("/reviews/{review_id}")
def delete_review(
    review_id: int,
    db: Session = Depends(database.get_db),
    user=Depends(dependencies.get_current_user)
):
    is_admin = user["role"] == "admin"
    return crud.delete_review(review_id, user["user_id"], db, is_admin)

# ----------------------------------------
# 👤 USER MANAGEMENT (Admin only)
# ----------------------------------------

@app.get("/users")
def get_users(
    db: Session = Depends(database.get_db),
    user=Depends(dependencies.require_admin)
):
    return crud.get_all_users(db)

@app.delete("/users/{user_id}")
def remove_user(
    user_id: int,
    db: Session = Depends(database.get_db),
    user=Depends(dependencies.require_admin)
):
    return crud.delete_user(user_id, db)

# ----------------------------------------
# 👤 CURRENT USER PROFILE
# ----------------------------------------

@app.get("/me")
def read_profile(user=Depends(dependencies.get_current_user)):
    return {"user": user}
