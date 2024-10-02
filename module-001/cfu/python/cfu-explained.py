# ----------------------------------------------------------------------------------
# This script demonstrates how to build and evaluate a linear regression model using
# a laundromat dataset, where the goal is to predict energy consumption based on the
# time of day. The model's performance is evaluated using Mean Squared Error (MSE).
# ----------------------------------------------------------------------------------

import pandas as pd  # Import pandas for data manipulation
from sklearn.linear_model import LinearRegression  # Import linear regression model
from sklearn.model_selection import train_test_split  # Import train-test split function
from sklearn.metrics import mean_squared_error  # Import MSE function

# Creating a sample dataset: Hours of the day and corresponding energy consumption (in kWh)
data = pd.DataFrame({
    'Hour': range(24),
    'Energy_Consumption': [
        5.1, 4.9, 5.0, 5.2, 5.3, 5.1, 5.0, 6.1, 6.5, 6.7, 7.2, 8.0, 
        7.8, 7.5, 7.3, 7.0, 6.8, 6.5, 6.2, 6.0, 5.7, 5.4, 5.2, 5.1
    ]
})

# Splitting the data into features (X) and target variable (y)
X = data[['Hour']]  # Feature: Hours of the day
y = data['Energy_Consumption']  # Target: Energy consumption in kWh

# Splitting the dataset into training and testing sets (80% training, 20% testing)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Creating and training the linear regression model
model = LinearRegression()
model.fit(X_train, y_train)  # Fit the model on the training data

# Making predictions on the test set
y_pred = model.predict(X_test)  # Predict energy consumption for the test data

# Evaluate the model's performance using Mean Squared Error (MSE)
mse = mean_squared_error(y_test, y_pred)
print(f'Mean Squared Error: {mse}')  # Output the MSE value

# ----------------------------------------------------------------------------------
# Summary:
# - The script builds a linear regression model to predict energy consumption based 
#   on the hour of the day.
# - Data is split into training and testing sets, where the model is trained on the 
#   training data and predictions are made on the test data.
# - Mean Squared Error (MSE) is used to evaluate the model's accuracy by comparing 
#   predicted values (y_pred) with actual values (y_test).
# ----------------------------------------------------------------------------------
