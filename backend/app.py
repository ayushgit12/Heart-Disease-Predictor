import uvicorn
from fastapi import FastAPI
from HeartDisease import HeartDisease
import numpy as np
import pickle
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware
# 2. Create the app object
app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

with open('model.pkl', 'rb') as model_file:
    classifier = pickle.load(model_file)
print(classifier)



# 3. Index route, opens automatically on http://127.0.0.1:8000
@app.get('/')
def index():
    return {'message': 'Hello, World'}

# 4. Route with a single parameter, returns the parameter within a message
#    Located at: http://127.0.0.1:8000/AnyNameHere
@app.get('/{name}')
def get_name(name: str):
    return {'Welcome To App': f'{name}'}

# 3. Expose the prediction functionality, make a prediction from the passed
#    JSON data and return the predicted Bank Note with the confidence
@app.post('/predict')
def predict_heart_disease(data:HeartDisease):
    # print(data)


    data_dict = data.model_dump()

    # Define the feature names
    feature_names = [
        'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 
        'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 
        'ca', 'thal'
    ]

    # Create a DataFrame for the input features
    input_df = pd.DataFrame([data_dict], columns=feature_names)

    # Make prediction
    prediction = classifier.predict(input_df)

    if(prediction[0] == 1):
        prediction = 'Heart Disease'
    else:
        prediction = 'No Heart Disease'
    
    return {
        'prediction': prediction
    }


    
    
# 5. Run the API with uvicorn
#    Will run on http://127.0.0.1:8000
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)