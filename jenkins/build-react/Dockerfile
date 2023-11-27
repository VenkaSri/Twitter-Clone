# Step 1: Build the React application
# Use a node base image to build the app
FROM node:latest as build

WORKDIR /app

COPY twitter-clone-front-end/package.json twitter-clone-front-end/yarn.lock ./
RUN yarn install


COPY twitter-clone-front-end/ ./
RUN yarn build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

