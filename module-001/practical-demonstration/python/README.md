<h1 align="center">
  <a href="https://github.com/dzc1/ironhack-amazon-april-2024-class-repo">
    <img src="../../../assets/imgs/banner.png" alt="Read Me banner - With logo of Ironhack">
  </a>
</h1>

# Energy Consumption Prediction Python Script

## Overview

This project demonstrates how to use **linear regression** to predict energy consumption based on the time of day in a laundromat. The script is written in Python and uses the `pandas` and `scikit-learn` libraries to create, train, and test a machine learning model. The model is trained on hourly energy consumption data and makes predictions for future consumption.

## Prerequisites

Before running the script, ensure you have the following installed on your local machine:

- **Python 3.x**: You can download it from [python.org](https://www.python.org/downloads/).
- **pip**: Python's package installer, which usually comes with Python installations.
- **Virtual environment support (optional but recommended)**: To isolate the project and dependencies.

## Setup Instructions

### Step 1: Create a Virtual Environment (Optional but Recommended)

Using a virtual environment ensures that your project dependencies are isolated from the global Python environment. To create a virtual environment, follow these steps:

1. **Open your terminal** and navigate to the directory where you want to set up the project.

2. Run the following command to create a virtual environment:

   ```bash
   python -m venv myenv
   ```

   - `python`: This invokes the Python interpreter.
   - `-m venv`: This uses the `venv` module to create a virtual environment.
   - `myenv`: This is the name of your virtual environment. You can name it anything you want.

3. **Activate the virtual environment**:

   - **On Windows**:
     ```bash
     myenv\Scripts\activate
     ```
   - **On macOS/Linux**:
     ```bash
     source myenv/bin/activate
     ```

   After activation, your terminal prompt should show the name of the virtual environment (e.g., `(myenv)`).

### Step 2: Install the Required Dependencies

Once the virtual environment is activated, install the necessary libraries using `pip`:

```bash
pip install pandas scikit-learn
```

This command will install the following libraries:

- `pandas`: For data manipulation and analysis.
- `scikit-learn`: For building and training the linear regression model.

### Step 3: Create the Python Script

Create a new Python file (e.g., `practical-demonstration.py`) and copy the following code into the file:

```bash
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

data = pd.DataFrame({
    'Hour': range(24),
    'Energy_Consumption': [
        5.1, 4.9, 5.0, 5.2, 5.3, 5.1, 5.0, 6.1, 6.5, 6.7, 7.2, 8.0,
        7.8, 7.5, 7.3, 7.0, 6.8, 6.5, 6.2, 6.0, 5.7, 5.4, 5.2, 5.1
    ]
})

X = data[['Hour']]
y = data['Energy_Consumption']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

print(f"Predicted energy consumption: {y_pred}")

```

### Step 4: Run the Script

With your virtual environment activated and the necessary libraries installed, you can now execute the script:

```bash
python practical-demonstration.py
```

### Step 5: Verify Output

After running the script, you should see the predicted energy consumption values for the test data printed in your terminal. If you want to customize the script, you can modify the dataset or the machine learning model.

##### Example Output

```bash
Predicted energy consumption: [5.48 6.15 5.22 6.65 5.1]
```

---

## Summary

This project demonstrates a simple linear regression model for predicting energy consumption in a laundromat based on the hour of the day. By following the steps in this README, you will:

- Set up a Python environment using `venv`.
- Install the necessary dependencies using `pip`.
- Run a script that uses `pandas` and `scikit-learn` to predict energy consumption using a machine learning model.
