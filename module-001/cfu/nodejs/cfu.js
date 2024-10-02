const mlRegression = require("ml-regression");
const { MSE } = require("ml-metrics");

const X = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

const y = [
  5.1, 4.9, 5.0, 5.2, 5.3, 5.1, 5.0, 6.1, 6.5, 6.7, 7.2, 8.0, 7.8, 7.5, 7.3,
  7.0, 6.8, 6.5, 6.2, 6.0, 5.7, 5.4, 5.2, 5.1,
];

const trainSize = Math.floor(0.8 * X.length);
const X_train = X.slice(0, trainSize);
const X_test = X.slice(trainSize);
const y_train = y.slice(0, trainSize);
const y_test = y.slice(trainSize);

const LinearRegression = mlRegression.LinearRegression;
const model = new LinearRegression(X_train, y_train);

const y_pred = X_test.map((hour) => model.predict(hour));

const mse = MSE(y_test, y_pred);
console.log(`Mean Squared Error: ${mse}`);
