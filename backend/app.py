from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS
from routes import auth
import os

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth)

# Conectar ao MongoDB
client = MongoClient(os.environ.get('MONGO_URI'))
db = client.meu_banco

@app.route('/')
def home():
    return jsonify({"message": "Backend em Flask estão rodando!"})

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    user_type = data.get('userType')
    return jsonify({"message": "Login realizado com sucesso", "user": username, "type": user_type})

@app.route('/registrar', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    user_type = data.get('userType')
    return jsonify({"message": "Registro realizado com sucesso", "user": username, "type": user_type})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)