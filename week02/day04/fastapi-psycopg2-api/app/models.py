from pydantic import BaseModel
class User(BaseModel):
    username: str
    email: str
    full_name: str
class UserCreate(BaseModel):
    username: str
    email: str
    full_name: str
