# ----------------------------------------------------------------------------------
# This script demonstrates how to use linear regression to predict energy consumption
# based on the time of day. The dataset includes hourly energy consumption values 
# for a laundromat, simulating typical patterns over a 24-hour period.
# 
# Purpose: This file is intended to provide instructors and reviewers with a basic 
# example of implementing a machine learning model (linear regression) using 
# the `scikit-learn` library in Python. The script explains the process of splitting 
# the dataset, training the model, and making predictions.
# ----------------------------------------------------------------------------------

# Importing necessary libraries
import pandas as pd  # Pandas is used for data manipulation and analysis
from sklearn.linear_model import LinearRegression  # Linear regression model from scikit-learn
from sklearn.model_selection import train_test_split  # Utility for splitting data into training and testing sets

# Creating an example dataset: Time of day (in hours) and corresponding energy consumption (in kWh)
data = pd.DataFrame({
    'Hour': range(24),  # The 'Hour' column represents each hour of the day (0 to 23)
    'Energy_Consumption': [
        5.1, 4.9, 5.0, 5.2, 5.3, 5.1, 5.0, 6.1, 6.5, 6.7, 7.2, 8.0, 
        7.8, 7.5, 7.3, 7.0, 6.8, 6.5, 6.2, 6.0, 5.7, 5.4, 5.2, 5.1
    ]  # The 'Energy_Consumption' column represents energy consumption in kWh for each hour
})

# Splitting the data into features (X) and target variable (y)
X = data[['Hour']]  # Features: The 'Hour' column
y = data['Energy_Consumption']  # Target: The 'Energy_Consumption' column

# Splitting the data into training and testing sets
# 80% of the data will be used for training, 20% for testing
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Creating and training the linear regression model
model = LinearRegression()  # Instantiate the LinearRegression model
model.fit(X_train, y_train)  # Fit the model on the training data

# Making predictions on the test set
y_pred = model.predict(X_test)  # Predict energy consumption for the test data

# Printing out the predicted energy consumption for the test set
print(f"Predicted energy consumption: {y_pred}")

# ----------------------------------------------------------------------------------
# Summary:
# - The script uses linear regression to predict energy consumption based on the hour of the day.
# - Data is split into training (80%) and testing (20%) sets to evaluate the model's performance.
# - The model is trained using the training set and makes predictions on the testing set.
# - The predicted energy consumption values for the test data are printed to the console using the print() method.
# - This example serves as an introduction to basic machine learning concepts, such as data preparation,
#   model training, and evaluation.
# ----------------------------------------------------------------------------------
