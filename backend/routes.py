from flask import Blueprint, request, jsonify
from models import create_user, find_user

auth = Blueprint('auth', __name__)

@auth.route('/registrar', methods=['POST'])
def register():
    data = request.json
    user_type = data['type']
    username = data['username']
    password = data['password']
    
    create_user(user_type, username, password)
    return jsonify({"message": "User created"}), 201

@auth.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data['username']
    password = data['password']
    
    user = find_user(username)
    if user and user['password'] == password:
        return jsonify({"message": "Login successful", "type": user['type']}), 200
    
    return jsonify({"message": "Invalid credentials"}), 401
