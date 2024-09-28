from flask import Flask, jsonify
from pymongo import MongoClient
import os

app = Flask(__name__)

# Conectar ao MongoDB
client = MongoClient(os.environ.get('MONGO_URI'))
db = client.meu_banco

@app.route('/')
def home():
    return jsonify({"message": "Backend em Flask estÃ¡ rodando!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)