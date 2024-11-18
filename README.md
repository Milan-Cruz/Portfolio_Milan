# Milan Cruz - Portfolio Website

This is my **portfolio website** developed using **React** with TypeScript and styled using **Bootstrap**. The site showcases my skills and projects, including my top works while studying at **RRC Polytech**. The application is containerized using **Docker** for easy deployment and hosting.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
- [Build and Run with Docker](#build-and-run-with-docker)
  - [Step 1: Build the Docker Image](#step-1-build-the-docker-image)
  - [Step 2: Run the Docker Container](#step-2-run-the-docker-container)
  - [Step 3: Access the Application](#step-3-access-the-application)
- [Stopping and Removing the Container](#stopping-and-removing-the-container)
- [Contact](#contact)

## Project Overview

This portfolio website was created to showcase my projects and experience in web development. The site features:

- A responsive design with a dark theme using Bootstrap.
- A hero section with my introduction and the MERN stack highlights.
- A showcase of my most important projects.
- A contact button for reaching out.

## Technologies Used

- **React** with TypeScript
- **Bootstrap** for styling
- **Docker** for containerization
- **Nginx** for serving the production build

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- **Docker** installed on your system. You can download Docker from [Docker's official website](https://www.docker.com/get-started).

### Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/Milan-Cruz/portfolio-website.git
cd portfolio-website
```

## Build and Run with Docker

The Docker setup will create a container that hosts a production build of the portfolio website.

### Step 1: Build the Docker Image

To build the Docker image, run the following command:

```bash
docker build -t cruz_milan_coding_assignment14 .
```

### Step 2: Run the Docker Container

Start the Docker container with the following command:

```bash
docker run -d -p 5575:80 --name cruz_milan_coding_assignment14 cruz_milan_coding_assignment14
```

- **`-d`**: Runs the container in detached mode (in the background).
- **`-p 5575:80`**: Maps port 5575 on your host to port 80 in the container.
- **`--name`**: Names the container as `cruz_milan_coding_assignment14`.

### Step 3: Access the Application

Open your web browser and navigate to:

```
http://localhost:5575
```

You should see my portfolio website running, showcasing my projects and skills.

## Stopping and Removing the Container

To stop the running container:

```bash
docker stop cruz_milan_coding_assignment14
```

To remove the container:

```bash
docker rm cruz_milan_coding_assignment14
```

To remove the Docker image:

```bash
docker rmi cruz_milan_coding_assignment14
```

## Contact

If you have any questions or would like to reach out, please feel free to contact me via the "Contact Me" button on the website.
