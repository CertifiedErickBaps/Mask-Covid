
from flask import Flask, request, jsonify
app = Flask(__name__)

#Bibliotecas que vamos a necesitar
import os
import math
import time
import random
import cv2
import numpy as np
import pandas as pd
import seaborn as sn
import torch
from torch.utils import data as torch_data
from torch import nn as torch_nn
import torchvision
from sklearn import metrics as sk_metrics
import joblib

class DataRetriever(torch_data.Dataset):
    def __init__(
        self,
        paths,
        targets,
        image_size=(224, 224),
        transforms=None
    ):
        self.paths = paths
        self.targets = targets
        self.image_size = image_size
        self.transforms = transforms
        self.preprocess = torchvision.transforms.Compose([
            torchvision.transforms.ToTensor(),
            torchvision.transforms.Normalize(
                mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225]
            ),
        ])

    def __len__(self):
        return 1
        #return len(self.targets)

    def __getitem__(self, index):
        img = cv2.imread(self.paths[index])
        img = cv2.resize(img, self.image_size)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        if self.transforms:
            img = self.transforms(image=img)['image']

        img = self.preprocess(img)

        y = torch.tensor(self.targets[index], dtype=torch.long)

        return {'X': img, 'y': y}



IMAGE_SIZE = (512, 512)
valid_paths = ["notobama.jpg"]
valid_targets = [1]


valid_data_retriever = DataRetriever(
    valid_paths,
    valid_targets,
    image_size=IMAGE_SIZE,
)

valid_loader = torch_data.DataLoader(
    valid_data_retriever,
    batch_size=1,
    shuffle=False,
)


device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

net = torch.hub.load('pytorch/vision:v0.6.0', 'mobilenet_v2', pretrained=True)
net.classifier = torch_nn.Linear(in_features=1280, out_features=2, bias=True)
model = net
model.to(device)

model_save_path = 'model.torch'

optimizer = torch.optim.Adam(model.parameters(), lr=0.0001)
criterion = torch_nn.CrossEntropyLoss()

checkpoint = torch.load(model_save_path)

model.load_state_dict(checkpoint['model_state_dict'])
optimizer.load_state_dict(checkpoint['optimizer_state_dict'])
best_valid_score = checkpoint['best_valid_score']
n_epoch = checkpoint['n_epoch']

model.eval();

y_pred = []
for batch in valid_loader:
    y_pred.extend(model(batch['X'].to(device)).argmax(axis=-1).cpu().numpy())
print(y_pred)



@app.route('/prueba/<uuid>', methods=['POST'])
def add_message(uuid):
       content = request.json
       print(content)
       return jsonify({"resultado":content})

@app.route('/image', methods=['POST'])
def post():
    request_data = request.get_json()
    image = request.files['Image']
    image.save('test_image.jpg')

    IMAGE_SIZE = (512, 512)
    valid_paths = ["test_image.jpg"]
    valid_targets = [1]


    valid_data_retriever = DataRetriever(
        valid_paths,
        valid_targets,
        image_size=IMAGE_SIZE,
    )

    valid_loader = torch_data.DataLoader(
        valid_data_retriever,
        batch_size=1,
        shuffle=False,
    )


    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

    net = torch.hub.load('pytorch/vision:v0.6.0', 'mobilenet_v2', pretrained=True)
    net.classifier = torch_nn.Linear(in_features=1280, out_features=2, bias=True)
    model = net
    model.to(device)

    model_save_path = 'model.torch'

    optimizer = torch.optim.Adam(model.parameters(), lr=0.0001)
    criterion = torch_nn.CrossEntropyLoss()

    checkpoint = torch.load(model_save_path)

    model.load_state_dict(checkpoint['model_state_dict'])
    optimizer.load_state_dict(checkpoint['optimizer_state_dict'])
    best_valid_score = checkpoint['best_valid_score']
    n_epoch = checkpoint['n_epoch']

    model.eval();

    y_pred = []
    for batch in valid_loader:
        y_pred.extend(model(batch['X'].to(device)).argmax(axis=-1).cpu().numpy())
    res = int(y_pred[0])
    print(res)
    return jsonify({"status":res})
