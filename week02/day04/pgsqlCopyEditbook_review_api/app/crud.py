from sqlalchemy.orm import Session
from app import models, schemas
from fastapi import HTTPException
def create_book(book: schemas.BookCreate, db: Session):
    new_book = models.Book(title=book.title, author=book.author)
    db.add(new_book)
    db.commit()
    db.refresh(new_book)
    return new_book

def get_all_books(db: Session):
    return db.query(models.Book).all()

def update_book(book_id: int, book_data: schemas.BookCreate, db: Session):
    book = db.query(models.Book).filter(models.Book.id == book_id).first()
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    book.title = book_data.title
    book.author = book_data.author
    db.commit()
    db.refresh(book)
    return book

def delete_book(book_id: int, db: Session):
    book = db.query(models.Book).filter(models.Book.id == book_id).first()
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    db.delete(book)
    db.commit()
    return {"message": "Book deleted"}



def create_review(review: schemas.ReviewCreate, user_id: int, db: Session):
    new_review = models.Review(
        content=review.content,
        book_id=review.book_id,
        user_id=user_id
    )
    db.add(new_review)
    db.commit()
    db.refresh(new_review)
    return new_review


def get_reviews_for_book(book_id: int, db: Session):
    return db.query(models.Review).filter(models.Review.book_id == book_id).all()

def delete_review(review_id: int, user_id: int, db: Session, is_admin=False):
    review = db.query(models.Review).filter(models.Review.id == review_id).first()
    if not review:
        raise HTTPException(status_code=404, detail="Review not found")
    if review.user_id != user_id and not is_admin:
        raise HTTPException(status_code=403, detail="Not allowed to delete this review")
    db.delete(review)
    db.commit()
    return {"message": "Review deleted"}


def get_all_users(db: Session):
    return db.query(models.User).all()

def delete_user(user_id: int, db: Session):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(user)
    db.commit()
    return {"message": "User deleted"}
