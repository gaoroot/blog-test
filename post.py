import requests
import json

# Load the posts from blog.json
with open('blog.json', 'r') as infile:
    posts = json.load(infile)

# Define the URL for the POST request
url = 'https://localhost:3000/blog'

# Send each post as a POST request
for post in posts:
    response = requests.post(url, json=post, verify=False)  # verify=False is used to skip SSL verification
    if response.status_code == 201:
        print(f"Post was successfully created: {response.json()}")
    else:
        print(f"Failed to create post. Status code: {response.status_code}, Response: {response.text}")