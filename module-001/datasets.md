# Datasets Used in the Module

This file provides the datasets used in the **Ethical AI in the Energy Sector** course, including both Python and Node.js examples.

---

## Dataset for Python Example (Energy Consumption in Laundromat)

This dataset represents the energy consumption of a laundromat measured hourly over a 24-hour period. It is used in Python to demonstrate how to predict energy consumption using a linear regression model.

```bash
import pandas as pd

data = pd.DataFrame({
    'Hour': range(24),
    'Energy_Consumption': [
        5.1, 4.9, 5.0, 5.2, 5.3, 5.1, 5.0, 6.1, 6.5, 6.7, 7.2, 8.0, 7.8, 7.5,
        7.3, 7.0, 6.8, 6.5, 6.2, 6.0, 5.7, 5.4, 5.2, 5.1
    ]
})
```

### Breakdown:

- **Hour**: Represents the hour of the day (0 to 23).
- **Energy_Consumption**: Represents the energy consumption in kWh for each corresponding hour.

## Dataset for Node.js Example (Energy Consumption in Laundromat)

This dataset is also based on hourly energy consumption in a laundromat. It is used in Node.js to demonstrate how to predict energy consumption using a linear regression model.

```bash
const X = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

const y = [
  5.1, 4.9, 5.0, 5.2, 5.3, 5.1, 5.0, 6.1, 6.5, 6.7, 7.2, 8.0, 7.8, 7.5, 7.3,
  7.0, 6.8, 6.5, 6.2, 6.0, 5.7, 5.4, 5.2, 5.1,
];
```

### Breakdown:

- **X (Hour)**: Represents the hour of the day (0 to 23).
- **y (Energy_Consumption)**: Represents the energy consumption in kWh for each corresponding hour.

## Future Extensions

By modifying these datasets and using them in linear regression and other machine learning models, students will gain hands-on experience solving complex problems in the energy sector.
