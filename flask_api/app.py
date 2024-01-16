from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@localhost/db_name'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    score = db.Column(db.Integer, default=0)

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.order_by(User.score.desc()).all()
    return jsonify(users)

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
