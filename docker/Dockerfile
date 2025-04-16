# Use Node 22 Alpine
FROM node:22-alpine3.19

# Install necessary dependencies in a single step
RUN apk update && apk upgrade && apk add --no-cache git libc6-compat

# Set working directory
WORKDIR /app

# Configure npm global cache (before installing dependencies)
RUN mkdir -p ~/.npm-global && npm config set cache ~/.npm-global

# Copy package files before installing dependencies (improves caching)
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy source code last (to avoid invalidating cache when src changes)
COPY ../src /app/src

