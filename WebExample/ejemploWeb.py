
from flask import Flask, request, jsonify
app = Flask(__name__)

import numpy as np
from joblib import load
dt = load('dt1.joblib')


@app.route('/prueba/<uuid>', methods=['POST'])
def add_message(uuid):
       content = request.json
       print(content)
       ejemplo = np.array([content['c1'], content['c2'], content['c3'], content['c4'], content['c5'],content['c6'], content['c7'],content['c8'], content['c9'], content['c10'], content['c11']])
       print(dt.predict(ejemplo.reshape(1, -1)))
       a=dt.predict(ejemplo.reshape(1, -1))
       return jsonify({"resultado":a[0]})

@app.route('/image', methods=['POST'])
def post():
    request_data = request.form['some_text']
    print(request_data)
    imagefile = request.files.get('imagefile', '')
    imagefile.save('test_image.jpg')
    return jsonify({"status":'OK'})
