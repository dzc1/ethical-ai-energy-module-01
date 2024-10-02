<h1 align="center">
  <a href="https://github.com/dzc1/ironhack-amazon-april-2024-class-repo">
    <img src="./assets/imgs/banner.png" alt="Read Me banner - With logo of Ironhack">
  </a>
</h1>

# Ethical AI in the Energy Sector Course

---

## Introduction

Welcome to the **Ethical AI in the Energy Sector** repository! This repository contains a foundational module designed to introduce students to the applications of Artificial Intelligence (AI) and Machine Learning (ML) in energy management. The content focuses on providing technical knowledge with ethical considerations, preparing learners for real-world scenarios where AI plays a crucial role in optimizing energy production, distribution, and consumption.

This course is part of an educational initiative driven by **Sara Mondragon** and her team, who aim to bridge the gap between AI, ethics, and the energy industry. It is designed for professionals and students who are interested in understanding how AI can be applied responsibly to solve critical problems in the energy sector.

---

## About Me

## About Me

Hi! I'm **Diego Zito**, a self-taught Computer Science engineer with expertise in Python, JavaScript for client-side applications, and Node.js for full-stack development.

I’m also proficient in **HTML** and **CSS**, making me a well-rounded front-end developer.

In addition to software development, I have hands-on experience as a **Control Systems Engineer**, where I integrate automation systems with machines like washers, dryers, and IoT setups.

Over the past five years, I’ve had the privilege of serving as a lead teacher at **Ironhack**, where I’ve taught more than 10 front-end and full-stack courses through B2B collaborations with companies such as **SOC**, **Conforcat**, and **Amazon**. I’ve personally guided over 150 students in their learning journeys, helping them navigate the world of technology. I am a proud **UX Designer Graduate** from the 2018 program in Barcelona and served as a **UX TA** from 2018 to 2019.

My career has taken me through consultancy roles, start-ups, and now running my own shop, where I focus on projects ranging from **native apps** and **AI chatbots** to **e-commerce platforms** and **web apps**. One of my favorite hobbies is reading code—it genuinely soothes me! In addition to teaching, I have also worked as a **course developer** for the **VUE Program** at Ironhack, collaborating with **Aleksandra Boskovic**, and as an educator for **Technigo.io**, where I developed their full-stack course and various micro-courses such as **AI-driven web apps**, **TypeScript tutorials**, and **LLM basics**.

This module has been particularly close to me as it is based on real-world data and examples generated from my own laundromat, **Dash & Dry**. The models and CFUs in these lessons have been inspired by and derived from the energy consumption patterns of the washing machines used in my business, making this a unique and personal learning journey for both myself and my students.

With experience in multiple programming languages and a background in data science, my goal is to simplify these concepts for students and professionals of all levels. I hope you enjoy working through these modules as much as I enjoyed creating them!

---

## Why This Repo Was Created

This repository was created to support the development of an **Ethical AI course** aimed at professionals and students in the energy industry. The course is designed to cover both **technical machine learning concepts** and **ethical considerations** associated with AI deployment.

**Sara Mondragon** has spearheaded this project to ensure that AI technologies are applied responsibly, emphasizing the importance of fairness, transparency, and sustainability in AI-powered energy systems.

---

## Index

- **Module 1**: Introduction to AI in the Energy Sector
- **Code Examples**: Node.js and Python implementations of linear regression models for energy consumption predictions
- **Teacher Guidelines**: Insights for instructors to engage students effectively

---

## Module Breakdown and Context

### Module 1: Introduction to AI in the Energy Sector

- **Overview**: This module introduces students to the basic concepts of AI and its applications in energy management. We cover the role AI plays in optimizing energy consumption and production, using **linear regression** as a foundational model. The module provides practical examples using **Node.js** and **Python** to predict energy consumption in scenarios such as laundromats, simulating the broader energy sector. Multiple language options are available to accommodate various programming skillsets.

- **Educational Context**: This module is designed for students with basic knowledge of programming, but no prior experience with AI or machine learning is required. It focuses on practical implementation using simple machine learning models.

---

## Libraries, Languages, and Code Context

- **Languages**:

  - **Node.js/JavaScript**: The examples in the module are implemented in Node.js to offer students hands-on experience using JavaScript, a widely-used language in web development.
  - **Python**: Python examples are also available for students who may prefer implementing models in Python. This approach covers a broad range of programming skillsets, making the course accessible to developers from various backgrounds.

- **Libraries**:

- **Python Libraries**:

  - **pandas**:

    - **Purpose**: Pandas is a powerful data manipulation and analysis library in Python. It is used to handle structured data, typically in the form of DataFrames, which are similar to tables in databases.
    - **Use in This Module**: Pandas is used to create and manipulate the dataset (e.g., energy consumption in laundromats) and structure it into a DataFrame for easy processing.

  - **scikit-learn**:

    - **Purpose**: Scikit-learn is a popular machine learning library in Python. It provides easy-to-use tools for implementing common machine learning algorithms, such as regression, classification, and clustering.
    - **Use in This Module**: The `LinearRegression` class is used to create and train a linear regression model, predicting energy consumption based on historical data.

  - **train_test_split**:

    - **Purpose**: This function from scikit-learn helps split the dataset into training and testing sets. Training sets are used to fit the model, and testing sets are used to evaluate its performance.
    - **Use in This Module**: Splitting the data into training and testing sets ensures that the model can be evaluated on unseen data to determine how well it generalizes.

  - **mean_squared_error**:
    - **Purpose**: This function calculates the Mean Squared Error (MSE), a metric used to evaluate the performance of regression models. It computes the average squared difference between predicted and actual values.
    - **Use in This Module**: MSE is used to assess the accuracy of the linear regression model by comparing its predictions with the actual energy consumption data.

---

- **Node.js Libraries**:

  - **ml-regression**:

    - **Purpose**: This Node.js library provides machine learning regression algorithms, such as linear regression, for use in JavaScript applications.
    - **Use in This Module**: The `LinearRegression` class from `ml-regression` is used to create and train a regression model to predict energy consumption based on historical data in Node.js.

  - **ml-metrics**:

    - **Purpose**: This library provides utilities to evaluate machine learning models in Node.js, such as calculating error metrics and regression models.
    - **Use in This Module**: The `MSE` function is used to compute the Mean Squared Error (MSE) to assess the model's performance. The `LinearRegression` functionality can also be accessed for training the model.

---

## Educational Context Level

This course is designed for **introductory to intermediate-level** learners with a background in programming (JavaScript/Node.js or Python). The course assumes no prior experience with AI or machine learning, but it requires a foundational understanding of coding principles.

- **Target Audience**:

  - Energy sector professionals looking to integrate AI into their work.

- **Level**:
  - **Introductory**: For those new to AI, Module 1 introduces fundamental concepts with practical examples that are easy to follow.

---

## References to Datasets and Explanations

The dataset used in this module simulates real-world energy consumption scenarios.

In Module 1, we use a dataset with hourly energy consumption in a laundromat to predict future energy usage based on historical data.

- **Module 1 Dataset**: Contains hourly energy consumption data for a laundromat over a 24-hour period.

These datasets are simplified to make them accessible for beginners but represent real-world challenges that students might encounter in energy management.

---

## Teacher/Reviewer Insights

For educators delivering this course, engaging students’ attention is crucial, especially when introducing them to AI and machine learning. Here are a few strategies to consider:

1. **Start with Real-World Examples**: Use the examples provided in the modules (e.g., energy consumption in laundromats) to ground students' learning in real-world scenarios. This helps them understand the relevance of AI and machine learning to everyday challenges.

2. **Encourage Experimentation**: Allow students to modify datasets and model parameters to see how changes affect outcomes. Encouraging them to ask "What if?" helps foster curiosity and deeper learning.

3. **Incorporate Ethical Discussions**: Use the ethical sections in each module to spark debates around fairness, bias, and transparency in AI. Pose questions like, "What happens if a biased dataset is used to predict energy consumption?" This encourages students to think critically about the real-world implications of their work.

4. **Interactive Code-Alongs**: Engaging students in code-alongs ensures they actively participate in building and experimenting with machine learning models. Prompt them to share their results and reflect on their learning.

---

## Conclusion

This repository provides an excellent introduction to AI and machine learning with a focus on ethical considerations in the energy sector.

By working through the modules, students will gain a strong foundation in AI concepts, build practical machine learning models using Node.js and Python, and explore the ethical challenges that arise when applying AI to critical industries.

Educators are encouraged to guide students through this content with an emphasis on hands-on learning, ethical reflection, and real-world applications.

I hope you find this module engaging, informative, and a valuable resource for understanding AI's transformative potential in the energy industry!

Best,

Diego Zito
