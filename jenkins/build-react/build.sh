#!/bin/bash

docker build -t test-frontend:$BUILD_TAG -f jenkins/build-react/Dockerfile \
--build-arg VITE_AUTH_BASE_URL=$VITE_AUTH_BASE_URL \
--build-arg VITE_POST_BASE_URL=$VITE_POST_BASE_URL \
--build-arg VITE_USER_BASE_URL=$VITE_USER_BASE_URL .
