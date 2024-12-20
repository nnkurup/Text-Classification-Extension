from flask import Flask, request, jsonify
from your_model_script import classify_text  # Assuming your classification code is here

app = Flask(__name__)

@app.route('/classify', methods=['POST'])
def classify():
    data = request.get_json()
    text = data['text']
    label, score = classify_text(text)
    return jsonify({'label': label, 'score': score})

if __name__ == '__main__':
    app.run(port=5000)

