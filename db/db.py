"""
This file will manage interactions with our data store.
At first, it will just contain stubs that return fake data.
Gradually, we will fill in actual calls to our datastore.
"""
import json
import os

DEMO_HOME = os.environ["DEMO_HOME"]

ROOMS_DB = f"{DEMO_HOME}/db/rooms.json"


def fetch_pets():
    """
    A function to return all pets in the data store.
    """
    return {"tigers": 2, "lions": 3, "zebras": 1}

def create_cuser():
       """
       A function that will save a user to the data base 
       """
            user = {"name":name, 
                    "age":age,
                    "demographic":demographic,
                    "Interest Categories": categories,
                    "location": location
            }
            create = json.dumps(user) 
