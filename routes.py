from main import app
from flask import render_template, request, jsonify
from pypdf import PdfReader

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/classificate', methods=['POST'])
def classificate():
    text = request.form.get('text')
    file = request.files.get('file')

    if text:
        return jsonify({'classification': 'productive', 'suggestion': text}), 200
    elif file:
        if file.filename.endswith('.txt'):
            content = file.read().decode('utf-8')
            content = content.strip()
            return jsonify({'classification': 'unproductive', 'suggestion': content}), 200
        elif file.filename.endswith('.pdf'):
            reader = PdfReader(file)
            content = ""
            for page in reader.pages:
                content += page.extract_text()
            content = content.strip()
            return jsonify({'classification': 'unproductive', 'suggestion': content}), 200 
    else:
        return jsonify({'status': "Error: No input provided"}), 400