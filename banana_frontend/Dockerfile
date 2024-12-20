# Use the official Node.js image
FROM node:10.9.0-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY ./banana_frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./banana_frontend .

# Build the Svelte application for production
RUN npm run build

# Expose the port that the app will run on
EXPOSE 80

# Start the app using the static server
CMD ["npm", "run", "dev"]
