from main import app
from flask import render_template, request, jsonify
from pypdf import PdfReader
from services.groq_service import classifyEmail, suggestAnswer
from services.nlp_service import preprocess_text

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/classificate', methods=['POST'])
def classificate():
    text = request.form.get('text')
    file = request.files.get('file')

    response = {}

    if text:
        text = preprocess_text(text)
        response = generateResponse(text)
    elif file:
        if file.filename.endswith('.txt'):
            content = file.read().decode('utf-8')
            content = preprocess_text(content)
            
            response = generateResponse(content)
        elif file.filename.endswith('.pdf'):
            reader = PdfReader(file)
            content = ""
            for page in reader.pages:
                content += page.extract_text()
            content = preprocess_text(content)
            
            response = generateResponse(content)
    else:
        return jsonify({'status': "Error: No input provided"}), 400
    
    return jsonify(response), 200 

def generateResponse(text):
    classification = classifyEmail(text)
    suggestion = suggestAnswer(text)
    return {'classification': classification, 'suggestion': suggestion}