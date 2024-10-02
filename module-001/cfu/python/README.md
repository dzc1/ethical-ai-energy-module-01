<h1 align="center">
  <a href="https://github.com/dzc1/ironhack-amazon-april-2024-class-repo">
    <img src="../../../assets/imgs/banner.png" alt="Read Me banner - With logo of Ironhack">
  </a>
</h1>

## Check for Understanding

# Linear Regression Model to Predict Energy Consumption with Python

## Overview

This exercise is designed to help you build and evaluate a linear regression model using Python and the **scikit-learn** library. The dataset represents energy consumption in a laundromat, measured hourly over a 24-hour period. You will predict energy consumption for future hours based on this data.

The key objectives are to:

- Build a linear regression model to predict energy consumption.
- Split the dataset into training and testing sets.
- Evaluate the model’s accuracy using the **Mean Squared Error (MSE)** metric.

## File Name

The Python script for this exercise is named `cfu_energy_prediction.py`.

## Objectives

- **Objective 1**: Build and train a linear regression model using the laundromat dataset.
- **Objective 2**: Predict energy consumption for the next 24 hours based on the time of day.
- **Objective 3**: Evaluate the accuracy of your model's predictions using Mean Squared Error (MSE).
- **Objective 4**: Experiment by adding additional features (e.g., weather data, machine load) and observe how the changes affect model accuracy.

## Expectations from Students

You are expected to:

1. **Understand Linear Regression**:

   - You should understand that linear regression is a machine learning algorithm that models the relationship between a dependent variable (energy consumption) and one or more independent variables (time of day, etc.).

2. **Use of `scikit-learn` Library**:

   - Familiarize yourself with the basic machine learning functions provided by `scikit-learn`. In this exercise, you will use:
     - `LinearRegression` to build and train your model.
     - `train_test_split` to split your dataset into training and testing sets.
     - `mean_squared_error` to evaluate the accuracy of your model's predictions.

3. **Understand the Dataset**:

   - The dataset contains 24 hourly records of energy consumption in a laundromat. Your model should predict the energy consumption for future hours based on the provided historical data.

4. **Model Performance Evaluation**:
   - Use the **Mean Squared Error (MSE)** function to evaluate how well your model’s predictions match the actual energy consumption data.

## Steps to Follow

1. **Set Up Your Environment**:

   - Ensure that you have **Python** and **scikit-learn** installed.
   - Install `scikit-learn` if needed using:
     ```bash
     pip install scikit-learn pandas
     ```

2. **Build the Model**:

   - Use the laundromat dataset provided in the script to build a **Linear Regression** model using the `LinearRegression` class from **scikit-learn**.
   - Split the data into training and testing sets using the `train_test_split` function. This will allow you to train the model on some data and test it on the rest to evaluate its performance.

3. **Make Predictions**:

   - Once the model is trained, use the test data to make predictions for future energy consumption. This is done using the `predict()` method.

4. **Evaluate the Model**:

   - Evaluate the model’s accuracy using the **Mean Squared Error (MSE)** function. The smaller the MSE, the more accurate your model is.

5. **Experiment**:
   - Add additional features like weather data, machine load, or any other relevant data to improve the model's accuracy. Track how these changes affect the MSE score.

## Detailed Explanation of Functions

### 1. `LinearRegression`

- **What It Is**: A class provided by **scikit-learn** that implements simple and multiple linear regression.
- **Purpose**: It is used to model the relationship between the input features (in this case, time of day) and the target variable (energy consumption).

### 2. `train_test_split`

- **What It Is**: A utility function provided by **scikit-learn** to split your dataset into training and testing sets.
- **Purpose**: The training set is used to fit the model, while the testing set is used to evaluate the model’s accuracy on unseen data. By doing this, you can estimate how well your model will perform in real-world scenarios.

### 3. `mean_squared_error`

- **What It Is**: A function provided by **scikit-learn** that calculates the mean squared error between the predicted values and the actual values.
- **Purpose**: It gives you an indication of how far off your model’s predictions are from the actual data. The lower the MSE, the better your model has performed.

## How to Execute the Exercise

1. **Create the Python File**:
   - Create a file named `cfu_energy_prediction.py` and paste the following code into it:

```python
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# Creating the dataset: Hours of the day and corresponding energy consumption
data = pd.DataFrame({
    'Hour': range(24),
    'Energy_Consumption': [
        5.1, 4.9, 5.0, 5.2, 5.3, 5.1, 5.0, 6.1, 6.5, 6.7, 7.2, 8.0, 7.8, 7.5,
        7.3, 7.0, 6.8, 6.5, 6.2, 6.0, 5.7, 5.4, 5.2, 5.1
    ]
})

# Splitting the data into features (X) and target variable (y)
X = data[['Hour']]
y = data['Energy_Consumption']

# Splitting the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Creating and training the linear regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Making predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model's performance using Mean Squared Error (MSE)
mse = mean_squared_error(y_test, y_pred)
print(f'Mean Squared Error: {mse}')
```

2. **Run the Script:**:
   - Open a terminal, navigate to the folder containing `cfu_energy_prediction.py`, and execute the script using:

```bash
python cfu_energy_prediction.py
```

3. Output
   - The script will display the **Mean Squared Error (MSE)** value, indicating how well your model performed.

---

Conclusion

By completing this exercise, you will have learned how to:

- Build a linear regression model using Python and **scikit-learn**.
