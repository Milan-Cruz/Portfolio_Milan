# React Component Library - UI Garden (with Code Quality Checks)

## Project Overview

This repository contains reusable UI components built with React, styled using StyledComponents, and documented with Storybook. Each component includes two states: default and disabled, offering versatility for use in various UI scenarios. The project is now equipped with **code quality checks** to ensure consistent formatting, linting, and successful test runs before committing changes to Git.

### Components:

- Button
- Label
- Text
- Table (with Header, Row, Cell, and Footer)
- Dropdown
- Radio Button
- Image
- Hero Image
- Card

**Created by Milan Cruz while attending the RRC Polytech Full Stack Web Development program.**

---

## Code Quality Checks

This project enforces strict code quality using the following tools:

- **ESLint**: To enforce coding standards and catch linting issues.
- **Prettier**: To automatically format code and maintain consistent styling.
- **React Script Tests (Jest)**: To run unit tests and ensure component functionality.
- **Husky**: To run these checks automatically before every commit, preventing bad uploads to Git.

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v16+)
- **npm** (latest)
- **Docker** (latest)

### Clone the Repository

To clone the repository, use the following command:

```bash
git clone https://github.com/Milan-Cruz/coding_assignment13
```

Navigate into the cloned project directory:

```bash
cd coding_assignment13
```

### Install Dependencies

This project uses npm for dependency management. Install the necessary dependencies by running:

```bash
npm install
```

### Pre-Commit Checks

This project enforces code quality using Husky with the following pre-commit checks:
- **Prettier** for code formatting
- **ESLint** for linting
- **Jest** for running tests

These checks will run automatically before every commit.

### Building the Docker Container

The Docker container hosts a **production build** of the component library. To build the container, run the following command:

```bash
docker build -t cruz_milan_coding_assignment13 .
```

This will build the Docker image and tag it as `cruz_milan_coding_assignment13`.

### Running the Docker Container

To run the container and host the web application on port `8018`, use the following command:

```bash
docker run --name cruz_milan_coding_assignment13 -p 8018:8018 cruz_milan_coding_assignment13
```

You can now access the web application at:

```
http://localhost:8018
```

### Accessing the Production Build

Once the container is running, open your browser and go to:

```
http://localhost:8018
```

Here, you can interact with the following components, each with both **default** and **disabled** states:

- **Button**
- **Label**
- **Text**
- **Table** (including Header, Row, Cell, and Footer)
- **Dropdown**
- **Radio Button**
- **Image**
- **Hero Image**
- **Card**

### Stopping the Docker Container

To stop the running container, use:

```bash
docker stop cruz_milan_coding_assignment13
```

If you want to remove the container entirely, use:

```bash
docker rm cruz_milan_coding_assignment13
```

---

## Development

To develop locally without Docker, you can run the application or Storybook server directly by using:

```bash
npm run start     # For running the Create React App
npm run storybook # For running Storybook on port 6006
```

---

## Conclusion

You have now successfully hosted your React component library in a Docker container! The components can be tested and visualized in both their **default** and **disabled** states.

---

**Created by Milan Cruz while attending the RRC Polytech Full Stack Web Development program.**

---