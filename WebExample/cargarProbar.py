import pandas as pd
from joblib import load
import numpy as np

df = pd.read_csv("winequality-red.csv")
df['quality'] = df['quality'].replace([3,4,5,6,7,8],['Malo','Malo','Regular','Regular','Bueno','Bueno'])
X=df.drop('quality', axis=1)
y=df['quality']
#Separar conjunto de entrenamiento y conjunto de prueba
from sklearn.model_selection import train_test_split
X_train,X_test,y_train,y_test= train_test_split(X,y,test_size=0.2, random_state=42)

#Cargar el modelo creado

dt = load('dt1.joblib')

#Ejemplo de predicción
print(dt.predict(X_test.iloc[[0]]))
with pd.option_context('display.max_rows', None, 'display.max_columns', None):
    print(X_test.iloc[[0]])

ejemplo=np.array([7.7,0.56,0.08,2.5,0.114,14,46,0.9971,3.24,0.66,9.6])

print(dt.predict(ejemplo.reshape(1,-1)))
