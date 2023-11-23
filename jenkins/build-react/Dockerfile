# Step 1: Build the React application
# Use a node base image to build the app
FROM node:latest as build

# Set the working directory in the container
WORKDIR /app

COPY twitter-clone-front-end/package.json twitter-clone-front-end/yarn.lock ./
RUN yarn install


COPY twitter-clone-front-end/ ./
RUN yarn build

# Step 2: Serve the application using a lightweight server
# Use nginx or another web server to serve the static files
FROM nginx:alpine

# Copy the built assets from the build stage to the nginx server
COPY --from=build /app/dist /usr/share/nginx/html
# Adjust the above path if your build output directory is different

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

