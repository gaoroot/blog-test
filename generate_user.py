import requests
# import json
# import random
from faker import Faker

fake = Faker()

def generate_random_user():
    return {
        "name": fake.name(),
        "email": fake.email()
    }

count = 5

status_values = ['draft', 'published']
random_users = [generate_random_user() for _ in range(count)]

# Define the URL for the POST request
url = 'http://localhost:3000/users'

# Send the posts as POST requests
for post in random_users:
    response = requests.post(url, json=post)
    if response.status_code == 201:
        print(f"User was successfully created: {response.json()}")
    else:
        print(f"Failed to create user. Status code: {response.status_code}, Response: {response.text}")