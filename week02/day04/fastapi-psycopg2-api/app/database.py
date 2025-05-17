import os
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()

DB_CONFIG = {
    "dbname": os.getenv("POSTGRES_DB", "myapp"),
    "user": os.getenv("POSTGRES_USER", "postgres"),
    "password": os.getenv("POSTGRES_PASSWORD", "wac193758"),
    "host": os.getenv("POSTGRES_HOST", "localhost"),
    "port": os.getenv("POSTGRES_PORT", "5432"),
}

def get_connection():
    conn = psycopg2.connect(**DB_CONFIG, cursor_factory=RealDictCursor)
    return conn
from fastapi import FastAPI
from app.routers import users


app = FastAPI()

app.include_router(users.router)
