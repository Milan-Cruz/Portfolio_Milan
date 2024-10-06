# React Storybook - UI Garden

## Project Overview

This repository contains reusable UI components built with React, styled using StyledComponents, and documented with Storybook. Each component includes two states: default and disabled, offering versatility for use in various UI scenarios.

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

**Created by Milan Cruz while coursing RRC Polytech Full Stack Web Development.**

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v16+)
- **npm** (latest)
- **Docker** (latest)

### Clone the Repository

To clone the repository, use the following command (replace `<your-github-url>` with the actual URL once you have the repo):

```bash
git clone <your-github-url>
```

Navigate into the cloned project directory:

```bash
cd <repository-folder>
```

### Install Dependencies

This project uses npm for dependency management. Install the necessary dependencies by running:

```bash
npm install
```

### Building the Docker Container

You can host the Storybook UI by building the Docker container. To do so, execute the following command:

```bash
docker build -t cruz_milan_coding_assignment12 .
```

This will build the Docker image and tag it as `cruz_milan_coding_assignment12`.

### Running the Docker Container

To run the container and host Storybook on port 8083, use the following command:

```bash
docker run -p 8083:8080 --name ui_garden cruz_milan_coding_assignment12:latest
```

This command maps port 8080 inside the container to port 8083 on your machine, allowing you to access Storybook at:

```
http://localhost:8083
```

### Accessing Storybook

Once the container is running, open your browser and go to:

```
http://localhost:8083
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
docker stop ui_garden
```

If you want to remove the container entirely, use:

```bash
docker rm ui_garden
```

---

## Development

To develop locally without Docker, you can run the Storybook server directly by using:

```bash
npm run storybook
```

This will launch Storybook on the default port (usually 6006).

---

## Conclusion

You have now successfully hosted your React Storybook components in a Docker container! The components can be tested and visualized in both their **default** and **disabled** states.

---

**Created by Milan Cruz while coursing RRC Polytech Full Stack Web Development.**

---