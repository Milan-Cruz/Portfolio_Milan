# Use Node.js version 20
FROM node:20-alpine

# Set the working directory and copy package.json for dependency installation
WORKDIR /Cruz_Milan_ui_garden
COPY package*.json ./

# Install dependencies and build the Storybook in one step
RUN npm install && npm run build-storybook

# Copy the entire project into the container
COPY . .

# Install a web server and expose port 8083 for serving the Storybook
RUN npm install -g http-server

# Expose port 8083 and serve the built Storybook
EXPOSE 8083
CMD ["http-server", "storybook-static"]
