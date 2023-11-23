#!/bin/bash
WORKSPACE=/var/lib/jenkins/workspace/pipeline-backend

docker build -t test-frontend:$BUILD_TAG -f jenkins/build-react/Dockerfile .


