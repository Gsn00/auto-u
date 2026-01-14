import re

STOP_WORDS = {"de", "a", "o", "e", "que", "para", "com", "um", "uma"}

def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)

    return " ".join(t for t in text.split() if t not in STOP_WORDS)