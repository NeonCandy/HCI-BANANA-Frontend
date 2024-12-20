# Use a compatible Node.js version
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
COPY ./package*.json ./

# Install dependencies (including missing peer dependencies)
RUN npm install stylus sugarss terser tsx yaml picomatch

# Copy the rest of the application code
COPY ./ .

# Build the Svelte application for production
# RUN npm run build

# Expose the port for the frontend app
EXPOSE 5000

# Start the application
CMD ["npm", "run", "dev"]
