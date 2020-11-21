import pandas as pd

df = pd.read_csv("winequality-red.csv")
df['quality'] = df['quality'].replace([3,4,5,6,7,8],['Malo','Malo','Regular','Regular','Bueno','Bueno'])
X=df.drop('quality', axis=1)
y=df['quality']
#Separar conjunto de entrenamiento y conjunto de prueba
from sklearn.model_selection import train_test_split
X_train,X_test,y_train,y_test= train_test_split(X,y,test_size=0.2, random_state=42)

from sklearn.tree import DecisionTreeClassifier
dt = DecisionTreeClassifier(random_state=42)
dt.fit(X_train,y_train)
#Comparar con los datos de entrenamiento (engañoso)
res_train=dt.score(X_train,y_train)

#Comparar con los datos de prueba (correcto)
res_test=dt.score(X_test,y_test)
print("Accuracy: ",res_test)

#Ejemplo de predicción
print(dt.predict(X_test.iloc[[0]]))
#Importar el modelo

from joblib import dump, load
dump(dt, 'dt1.joblib')
