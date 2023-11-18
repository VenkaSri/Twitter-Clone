#!/bin/bash

# Copy the new jar to the build location
cp -f twitter-clone-back-end/target/*.jar jenkins/build-spring-app/

echo "** Setting up Docker Buildx **"

# Create a new builder instance
docker buildx create --name mybuilder --use

# Start up the builder instance
docker buildx inspect --bootstrap

echo "** Building Docker Image for AMD architecture **"

# Build the Docker image for amd64 architecture
docker buildx build --platform linux/amd64 -t tc-test-backend:$BUILD_TAG --load jenkins/build-spring-app/

# Clean up builder instance
docker buildx rm mybuilder

