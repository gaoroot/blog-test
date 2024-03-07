import requests
import json
import random
from faker import Faker

fake = Faker()

def generate_random_post(user_ids):
    return {
        "title": fake.sentence(),
        "content": fake.text(),
        "userId": random.choice(user_ids),
        "status": random.choice(status_values),
        "image": fake.image_url()
    }

# Define the number of posts to generate
count = 100  # Change this to the desired number of posts

# Generate 'count' random posts
user_ids = [1, 2, 3, 4, 5]  # Replace with actual user IDs
status_values = ['draft', 'published']
random_posts = [generate_random_post(user_ids) for _ in range(count)]

# Define the URL for the POST request
url = 'http://localhost:3000/blog'

# Send the posts as POST requests
for post in random_posts:
    response = requests.post(url, json=post)
    if response.status_code == 201:
        print(f"Post was successfully created: {response.json()}")
    else:
        print(f"Failed to create post. Status code: {response.status_code}, Response: {response.text}")