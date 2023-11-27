# Step 1: Build the React application
# Use a node base image to build the app
FROM node:latest as build

ARG VITE_AUTH_BASE_URL
ARG VITE_POST_BASE_URL
ARG VITE_USER_BASE_URL


WORKDIR /app

COPY twitter-clone-front-end/package.json twitter-clone-front-end/yarn.lock ./
RUN yarn install


# Use build arguments as environment variables
ENV $VITE_AUTH_BASE_URL
ENV $VITE_POST_BASE_URL
ENV $VITE_USER_BASE_URL
COPY twitter-clone-front-end/ ./
RUN yarn build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

