#!/bin/bash


docker build -t test-frontend:$BUILD_TAG -f jenkins/build-react/Dockerfile .
