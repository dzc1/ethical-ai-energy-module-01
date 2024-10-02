<h1 align="center">
  <a href="https://github.com/dzc1/ironhack-amazon-april-2024-class-repo">
    <img src="../../../assets/imgs/banner.png" alt="Read Me banner - With logo of Ironhack">
  </a>
</h1>

# Energy Consumption Prediction Node.JS Script

## Overview

This project demonstrates how to use the `ml-regression` library to implement a linear regression model that predicts energy consumption based on the time of day. The script uses hourly energy consumption data to train the model, and it predicts the energy consumption for the next hour (hour 24).

## Prerequisites

Before running the script, ensure you have the following installed on your local machine:

- **Node.js**: You can download it from [nodejs.org](https://nodejs.org/). This includes `npm`, the Node.js package manager.
- **npm**: The Node.js package manager that is automatically installed with Node.js.

## Setup Instructions

### Step 1: Install Node.js and npm

If you do not have **Node.js** and **npm** installed, download and install them from the [official Node.js website](https://nodejs.org/). Make sure that the installation is successful by running the following commands in your terminal:

```bash
node -v
npm -v
```

These commands should display the versions of Node.js and npm installed on your system.

### Step 2: Set up the Project

1. Create a new directory for your project and navigate to it in your terminal:

```bash
mkdir energy-prediction
cd energy-prediction
```

2. Initialize a new Node.js project:

```bash
npm init -y
```

This will generate a package.json file in your project directory.

### Step 3: Install the Required Library

Next, install the `ml-regression` library, which is used for implementing the linear regression model:

```bash
npm install ml-regression
```

This will add the `ml-regression` library to your project and list it as a dependency in the `package.json` file.

### Step 4: Create the Script

Create a new file called `practical-demonstration.js` and add the following code:

```bash
const mlRegression = require("ml-regression");
const { LinearRegression } = mlRegression;

const X = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];
const y = [
  5.1, 4.9, 5.0, 5.2, 5.3, 5.1, 5.0, 6.1, 6.5, 6.7, 7.2, 8.0, 7.8, 7.5, 7.3,
  7.0, 6.8, 6.5, 6.2, 6.0, 5.7, 5.4, 5.2, 5.1,
];

const regression = new LinearRegression(X, y);

const predicted = regression.predict(24);
console.log(`Predicted energy consumption for hour 24: ${predicted} kWh`);
```

### Step 5: Run the Script

Once your script is set up and your dependencies are installed, you can run the script using Node.js.

To execute the script, run the following command in your terminal:

```bash
node practical-demonstration.js
```

### Step 6: Verify Output

If the script runs successfully, you should see the predicted energy consumption for hour 24 printed to your console. The output will look something like this:

```bash
Predicted energy consumption for hour 24: 5.02 kWh
```

---

## Summary

This project demonstrates a basic implementation of a **linear regression** model in Node.js using the `ml-regression` library. By following the steps in this README, you will:

- Set up a Node.js project with necessary dependencies.
- Create a simple machine learning model for predicting energy consumption based on past data.
- Run the model and make predictions for future energy consumption.
