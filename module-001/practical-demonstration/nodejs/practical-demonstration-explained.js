/*
---------------------------------------------------------------------------------
This script demonstrates how to use the `ml-regression` library to implement a 
linear regression model that predicts energy consumption based on the time of day.

Purpose:
This file is intended to provide instructors and reviewers with a basic example 
of implementing a machine learning model (linear regression) using JavaScript and 
the `ml-regression` library in Node.js. The example dataset includes hourly energy 
consumption values for a laundromat, simulating energy usage patterns over a 
24-hour period.

The goal is to predict the energy consumption for the next hour (hour 24) 
based on historical data.
---------------------------------------------------------------------------------
*/

// Importing the required library for regression
const mlRegression = require("ml-regression"); // Importing the ml-regression library
const { LinearRegression } = mlRegression; // Extracting the LinearRegression class from the ml-regression module

// Example dataset
const X = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
]; // Hours of the day (from 0 to 23)
const y = [
  5.1, 4.9, 5.0, 5.2, 5.3, 5.1, 5.0, 6.1, 6.5, 6.7, 7.2, 8.0, 7.8, 7.5, 7.3,
  7.0, 6.8, 6.5, 6.2, 6.0, 5.7, 5.4, 5.2, 5.1,
]; // Energy consumption in kWh for each corresponding hour

// Create and train the linear regression model
const regression = new LinearRegression(X, y); // Create an instance of LinearRegression and fit it to the dataset

// Predict energy consumption for hour 24 (next day)
const predicted = regression.predict(24); // Predict energy consumption for hour 24 (next day)
console.log(`Predicted energy consumption for hour 24: ${predicted} kWh`); // Print the predicted energy consumption
/*
---------------------------------------------------------------------------------
Summary:
- The script uses the `ml-regression` library to create a linear regression model 
  that predicts energy consumption based on the hour of the day.
- The dataset includes 24 hours of energy consumption data, with the goal of 
  predicting consumption for the next hour (hour 24).
- The model is trained on historical data (hours 0-23), and predictions are made 
  for future energy consumption.
- The predicted value for hour 24 is printed to the console.
- This example serves as an introduction to machine learning concepts in Node.js, 
  demonstrating how regression models can be used to make predictions from past 
  data.
---------------------------------------------------------------------------------
*/
