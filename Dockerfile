FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the app
RUN npm run build

# Set environment variable for production
ENV NODE_ENV=production

# Define the command to start the application
CMD ["npm", "start"]