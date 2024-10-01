from pymongo import MongoClient
import os

client = MongoClient(os.environ.get('MONGO_URI'))
db = client.meu_banco

def create_user(user_type, username, password):
    user = {
        "type": user_type,
        "username": username,
        "password": password
    }
    db.users.insert_one(user)

def find_user(username):
    return db.users.find_one({"username": username})
