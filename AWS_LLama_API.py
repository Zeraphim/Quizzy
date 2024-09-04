from flask import Flask, request, jsonify

import os
import replicate

from flask_cors import CORS

'''
This API created using Flask is hosted on AWS EC2 instance

Sample Request:

http://localhost:5000/hello

/ask
http://localhost:5000/ask?input=Give%20me%205%20questions%20related%20to%20JavaScript

'''

os.environ["REPLICATE_API_TOKEN"] = "MY_API_KEY"
api = replicate.Client(api_token=os.environ["REPLICATE_API_TOKEN"])

app = Flask(__name__)
CORS(app)

@app.route('/hello', methods=['GET'])
def hello():
    return "World"


@app.route('/ask', methods=['GET'])
def ask():
    user_input = request.args.get('input', '')

    prompt = """
    INITIAL_PROMPT
    
    Structure the results strictly in this manner, Type can have "Identification", "True/False", and "Multiple Choice"

    GIVE THE ANSWER ONLY NO MORE NO LESS

    "Question": "The Question 1",
    "Type": "Identification",
    "Answer": "The Answer",

    "Question": "The Question 2",
    "Type": "Identification",
    "Answer": "The Answer",

    """

    output = ""

    try:
        response = api.run(
            "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
            input={"prompt": prompt}
        )
        for item in response:
            output += item
    except Exception as e:
        return jsonify({"error": str(e)})

    return jsonify({"output": output})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)