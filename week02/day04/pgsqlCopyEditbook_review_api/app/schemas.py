from pydantic import BaseModel
from typing import Optional

class UserBase(BaseModel):
    username: str
    

class UserCreate(BaseModel):
    username: str
    password: str

class UserOut(UserBase):
    id: int
    role: str

    class Config:
        orm_mode = True  



class BookBase(BaseModel):
    title: str
    author: str

class BookCreate(BookBase):
    pass

class BookOut(BookBase):
    id: int

    class Config:
        orm_mode = True


class ReviewBase(BaseModel):
        content : str

class ReviewCreate (BaseModel):
    book_id : int
     

class Reviewout(ReviewBase):
    id : int
    user_id : int
    book_id : int 
    
    class config:
        orm_mode = True

