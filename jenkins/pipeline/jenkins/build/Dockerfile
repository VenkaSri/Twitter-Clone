# Use Nginx image to serve
FROM nginx:alpine

# Create app directory
RUN mkdir /app

# Copy the build folder from React to the app directory
COPY ./build /app

# Remove default nginx website and copy the build folder into nginx folder
RUN rm -rf /usr/share/nginx/html/* && cp -r /app/* /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

