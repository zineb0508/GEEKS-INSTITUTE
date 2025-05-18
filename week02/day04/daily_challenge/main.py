# made with IA
import random
import requests
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker


Base = declarative_base()


class Country(Base):
    __tablename__ = 'countries'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    capital = Column(String)
    flag = Column(String)
    subregion = Column(String)
    population = Column(Integer)


engine = create_engine('sqlite:///countries.db')
Base.metadata.create_all(engine)  
Session = sessionmaker(bind=engine)
session = Session()


def fetch_and_save_countries():
    print("📡 Fetching countries...")
    response = requests.get("https://restcountries.com/v3.1/all")
    
    if response.status_code != 200:
        print(" Failed to fetch data")
        return

    countries_data = response.json()
    random_countries = random.sample(countries_data, 10)

    for country in random_countries:
        try:
            name = country.get("name", {}).get("common", "No name")
            capital = country.get("capital", ["No capital"])[0]
            flag = country.get("flags", {}).get("png", "")
            subregion = country.get("subregion", "Unknown")
            population = country.get("population", 0)

            country_obj = Country(
                name=name,
                capital=capital,
                flag=flag,
                subregion=subregion,
                population=population
            )
            session.add(country_obj)
        except Exception as e:
            print(f"Error with a country: {e}")

    session.commit()
    print(" Saved 10 countries to the database!")


fetch_and_save_countries()



print("\n Saved Countries:")
countries = session.query(Country).all()
for country in countries:
    print(f" {country.name} | Capital: {country.capital} | Population: {country.population}")
