<h1 align="center">
  <a href="https://github.com/dzc1/ironhack-amazon-april-2024-class-repo">
    <img src="../../../assets/imgs/banner.png" alt="Read Me banner - With logo of Ironhack">
  </a>
</h1>

## Check for Understanding

# Linear Regression Model to Predict Energy Consumption with Node.js

## Overview

This exercise is designed to help you build and evaluate a linear regression model using Node.js and the **ml-regression** and **ml-metrics** libraries. The dataset represents energy consumption in a laundromat, measured hourly over a 24-hour period. You will predict energy consumption for future hours based on this data.

The key objectives are to:

- Build a linear regression model to predict energy consumption.
- Split the dataset into training and testing sets.
- Evaluate the model’s accuracy using the **Mean Squared Error (MSE)** metric.

## File Name

The Node.js script for this exercise is named `cfu_energy_prediction.js`.

## Objectives

- **Objective 1**: Build and train a linear regression model using the laundromat dataset.
- **Objective 2**: Predict energy consumption for the next 24 hours based on the time of day.
- **Objective 3**: Evaluate the accuracy of your model's predictions using Mean Squared Error (MSE).
- **Objective 4**: Experiment by adding additional features (e.g., weather data, machine load) and observe how the changes affect model accuracy.

## Expectations from Students

You are expected to:

1. **Understand Linear Regression**:

   - You should understand that linear regression is a machine learning algorithm that models the relationship between a dependent variable (energy consumption) and one or more independent variables (time of day, etc.).

2. **Use of `ml-regression` Library**:

   - Familiarize yourself with the basic machine learning functions provided by `ml-regression`. In this exercise, you will use:
     - `LinearRegression` to build and train your model.
     - Node.js functions to split your dataset into training and testing sets.
     - `MSE` from the `ml-metrics` library to evaluate the accuracy of your model's predictions.

3. **Understand the Dataset**:

   - The dataset contains 24 hourly records of energy consumption in a laundromat. Your model should predict the energy consumption for future hours based on the provided historical data.

4. **Model Performance Evaluation**:
   - Use the **Mean Squared Error (MSE)** function to evaluate how well your model’s predictions match the actual energy consumption data.

## Steps to Follow

1. **Set Up Your Environment**:

   - Ensure that you have **Node.js** installed.
   - Initialize your project and install the required packages by running the following commands:
     ```bash
     npm init -y
     npm install ml-regression ml-metrics
     ```

2. **Build the Model**:

   - Use the laundromat dataset provided in the script to build a **Linear Regression** model using the `LinearRegression` class from **ml-regression**.
   - Split the data into training and testing sets using JavaScript array functions. This will allow you to train the model on some data and test it on the rest to evaluate its performance.

3. **Make Predictions**:

   - Once the model is trained, use the test data to make predictions for future energy consumption. This is done by applying the `predict()` method on the test data.

4. **Evaluate the Model**:

   - Evaluate the model’s accuracy using the **Mean Squared Error (MSE)** function from `ml-metrics`. The smaller the MSE, the more accurate your model is.

5. **Experiment**:
   - Add additional features like weather data, machine load, or any other relevant data to improve the model's accuracy. Track how these changes affect the MSE score.

## Detailed Explanation of Functions

### 1. `LinearRegression`

- **What It Is**: A class provided by **ml-regression** that implements simple and multiple linear regression.
- **Purpose**: It is used to model the relationship between the input features (in this case, time of day) and the target variable (energy consumption).

### 2. `MSE`

- **What It Is**: A function provided by **ml-metrics** that calculates the mean squared error between the predicted values and the actual values.
- **Purpose**: It gives you an indication of how far off your model’s predictions are from the actual data. The lower the MSE, the better your model has performed.

## How to Execute the Exercise

1. **Create the Node.js File**:
   - Create a file named `cfu_energy_prediction.js` and paste the following code into it:

```javascript
// Import required libraries
const mlRegression = require("ml-regression");
const { MSE } = require("ml-metrics");

// Example dataset: Hours of the day and corresponding energy consumption (in kWh)
const X = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];
const y = [
  5.1, 4.9, 5.0, 5.2, 5.3, 5.1, 5.0, 6.1, 6.5, 6.7, 7.2, 8.0, 7.8, 7.5, 7.3,
  7.0, 6.8, 6.5, 6.2, 6.0, 5.7, 5.4, 5.2, 5.1,
];

// Splitting the data into training and testing sets (80% training, 20% testing)
const trainSize = Math.floor(0.8 * X.length);
const X_train = X.slice(0, trainSize);
const X_test = X.slice(trainSize);
const y_train = y.slice(0, trainSize);
const y_test = y.slice(trainSize);

// Create and train the linear regression model
const LinearRegression = mlRegression.LinearRegression;
const model = new LinearRegression(X_train, y_train);

// Make predictions on the test set
const y_pred = X_test.map((hour) => model.predict(hour));

// Evaluate the model's performance using Mean Squared Error (MSE)
const mse = MSE(y_test, y_pred);
console.log(`Mean Squared Error: ${mse}`);
```

2. **Run the Script**:

   - Open a terminal, navigate to the folder containing `cfu_energy_prediction.js`, and execute the script using:

```bash
node cfu_energy_prediction.js
```

1. **Output**:

   - The script will display the **Mean Squared Error (MSE)** value, indicating how well your model performed.

---

Conclusion

By completing this exercise, you will have learned how to:

- Build a linear regression model using Node.js and the **ml-regression** library.
- Split your dataset into training and testing sets.
- Make predictions using the model and evaluate its performance using **Mean Squared Error (MSE)**.
- Experiment with additional features to improve your model's accuracy.
