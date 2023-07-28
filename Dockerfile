FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if using npm) to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install i

# Copy the rest of the application files to the container
COPY . .


# Expose the port your Nest.js application is listening on
EXPOSE 8080

# Start the Nest.js application
CMD ["npm", "run", "start:prod"]
