"""
This file will manage interactions with our data store.
At first, it will just contain stubs that return fake data.
Gradually, we will fill in actual calls to our datastore.
"""


def fetch_pets():
    """
    A function to return all pets in the data store.
    """
    return {"tigers": 2, "lions": 3, "zebras": 1}



def create_cuser(name, demographic, age, categories, location):
    """
    A function that will save a user to the data base
    """
    user = {"name": name,
            "age": age,
            "demographic": demographic,
            "Interest Categories": categories,
            "location": location}
    create = json.dumps(user)
    print(create)
