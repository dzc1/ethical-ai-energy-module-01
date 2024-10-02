/*
---------------------------------------------------------------------------------
This script demonstrates how to use the `ml-regression` and `ml-metrics` libraries 
to build a linear regression model and evaluate its performance using Mean Squared Error (MSE). 

Purpose:
The purpose of this script is to show instructors and reviewers how to implement 
and test a machine learning model in Node.js. The dataset represents hourly energy 
consumption in a laundromat, and the model aims to predict energy consumption based 
on the hour of the day. After training the model, its performance is evaluated using MSE.

---------------------------------------------------------------------------------
*/

// Import required libraries
const mlRegression = require("ml-regression"); // For linear regression model creation
const { MSE } = require("ml-metrics"); // For calculating Mean Squared Error (MSE)

// Example dataset: Hours of the day and corresponding energy consumption (in kWh)
const X = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
]; // Features: Hours of the day (0-23)

const y = [
  5.1, 4.9, 5.0, 5.2, 5.3, 5.1, 5.0, 6.1, 6.5, 6.7, 7.2, 8.0, 7.8, 7.5, 7.3,
  7.0, 6.8, 6.5, 6.2, 6.0, 5.7, 5.4, 5.2, 5.1,
]; // Target: Energy consumption in kWh for each hour

// Splitting the data into training and testing sets (80% training, 20% testing)
const trainSize = Math.floor(0.8 * X.length); // Determine the size of the training set (80%)
const X_train = X.slice(0, trainSize); // Features for training the model
const X_test = X.slice(trainSize); // Features for testing the model
const y_train = y.slice(0, trainSize); // Target values for training the model
const y_test = y.slice(trainSize); // Target values for testing the model

// Create and train the linear regression model
const LinearRegression = mlRegression.LinearRegression; // Access the LinearRegression class from ml-regression
const model = new LinearRegression(X_train, y_train); // Instantiate and train the model on the training data

// Make predictions on the test set
const y_pred = X_test.map((hour) => model.predict(hour)); // Predict energy consumption for each hour in the test set

// Evaluate the model's performance using Mean Squared Error (MSE)
const mse = MSE(y_test, y_pred); // Calculate the mean squared error between the actual and predicted values
console.log(`Mean Squared Error: ${mse}`); // Output the MSE to the console

/*
---------------------------------------------------------------------------------
Summary:
- The script builds a linear regression model to predict energy consumption based on 
  the hour of the day, using `ml-regression` to create and train the model.
- Data is split into training (80%) and testing (20%) sets, allowing the model to be 
  trained on part of the data and evaluated on unseen data.
- The model's performance is evaluated using Mean Squared Error (MSE), calculated by 
  comparing the predicted values (y_pred) with the actual values (y_test).
- This example demonstrates the basic workflow of building, training, and evaluating 
  a machine learning model in Node.js.
---------------------------------------------------------------------------------
*/
