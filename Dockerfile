# Use the official Node.js LTS (Alpine) image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

ENV NODE_ENV=production
# Install dependencies
RUN npm install

# Install NestJS CLI globally
RUN npm install -g @nestjs/cli

# Copy the rest of your application code
COPY . .

# Set environment variables
ENV PORT=8000
ENV SECRET_KEY=ahmed01091749487
ENV TOKEN_SECONDS_DURATION=100
ENV PUBLIC_API_RATE_LIMIT=50
ENV AUTH_API_RATE_LIMIT=70
ENV TTL_RATE_LIMIT=300
# Build the Nest.js app
RUN npm run build


# Expose the port your Nest.js application is listening on
EXPOSE 8000

# Command to run the application
CMD ["npm", "run", "start:prod"]