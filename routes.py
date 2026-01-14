from main import app
from flask import render_template, request, jsonify

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/classificate', methods=['POST'])
def classificate():
    text = request.form.get('text')
    file = request.files.get('file')

    if text or file:
        return jsonify({'status': "Ok"}), 200
    else:
        return jsonify({'status': "Error: No input provided"}), 400