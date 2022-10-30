from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

from endpoint import generate_response

app = Flask(__name__)
CORS(app)

@app.route('/generate', methods=['GET'])
def get_password():
    args = request.args
    password_length = args.get('length', type=int)
    amount_passwords = args.get('amount', type=int)
    return jsonify(
        generate_response(password_length, amount_passwords)
    )

if __name__ == '__main__':
    app.run(port="5001")