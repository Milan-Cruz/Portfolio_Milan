# Use an official Node.js image as the base for building the app
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /Cruz_Milan_final_site

# Copy package.json and package-lock.json, and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files and build the React app for production
COPY . .
RUN npm run build

# Use an official Nginx image to serve the production build
FROM nginx:alpine

# Copy the build folder from the previous stage to the Nginx HTML directory
COPY --from=build /Cruz_Milan_final_site/build /usr/share/nginx/html

# Expose the port the app will run on
EXPOSE 5575

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
